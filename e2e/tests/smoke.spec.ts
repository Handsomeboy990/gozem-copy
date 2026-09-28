import { test, expect } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appsDir = path.resolve(__dirname, "../../apps");

interface Journey {
  app: string;
  route: string;
  url: string;
}

// Public URL prefix each app is mounted under by e2e/serve.mjs (and by each
// app's vite `base`). Website is mounted at the domain root.
const APP_PREFIXES: Record<string, string> = {
  website: "",
  customer: "/app",
  driver: "/driver",
  merchant: "/merchant",
  admin: "/admin",
};

/** Pull `path: "..."` route strings out of an app's routes.tsx, skipping
 * wildcard (`*`) and redirect-only (`<Navigate .../>`) entries. */
function extractRoutes(app: string): string[] {
  const file = path.join(appsDir, app, "src/routes.tsx");
  const src = fs.readFileSync(file, "utf-8");
  const out: string[] = [];
  for (const line of src.split("\n")) {
    const match = line.match(/path:\s*"([^"]+)"/);
    if (!match) continue;
    const routePath = match[1];
    if (routePath.includes("*")) continue;
    if (/Navigate/.test(line)) continue;
    out.push(routePath);
  }
  return out;
}

const journeys: Journey[] = [];
for (const app of Object.keys(APP_PREFIXES)) {
  const prefix = APP_PREFIXES[app];
  for (const route of extractRoutes(app)) {
    const url = `${prefix}${route}`;
    journeys.push({ app, route, url });
  }
}

test.describe("route smoke", () => {
  for (const journey of journeys) {
    test(`${journey.app} ${journey.route} loads clean and shows the disclaimer banner`, async ({
      page,
    }) => {
      const pageErrors: Error[] = [];
      page.on("pageerror", (err) => pageErrors.push(err));

      await page.goto(journey.url);
      await expect(page.getByTestId("disclaimer-banner")).toBeVisible();

      expect(
        pageErrors,
        `unexpected page error(s) on ${journey.url}: ${pageErrors.map((e) => e.message).join("; ")}`
      ).toEqual([]);
    });

    test(`${journey.app} ${journey.route} language switch changes the banner text`, async ({
      page,
    }) => {
      await page.goto(journey.url);
      const banner = page.getByTestId("disclaimer-banner");
      await expect(banner).toBeVisible();
      const before = await banner.textContent();

      const langSwitch = page.getByTestId("lang-switch");
      // Click whichever language button is not currently active, regardless
      // of which language the app defaulted to.
      await langSwitch.getByRole("button", { pressed: false }).first().click();

      await expect(banner).not.toHaveText(before ?? "");
    });
  }
});

const SW_PREFIXES: Record<string, string> = {
  customer: "/app/",
  driver: "/driver/",
  merchant: "/merchant/",
  admin: "/admin/",
};

test.describe("service worker scope", () => {
  for (const [app, prefix] of Object.entries(SW_PREFIXES)) {
    test(`${app} registers a service worker scoped to ${prefix}`, async ({ page }) => {
      await page.goto("/");
      await page.goto(prefix);

      const scope = await page.evaluate(async () => {
        const registration = await navigator.serviceWorker.ready;
        return registration.scope;
      });

      expect(scope.endsWith(prefix)).toBe(true);
    });
  }
});

test.describe("offline resilience", () => {
  for (const [app, prefix] of Object.entries(SW_PREFIXES)) {
    test(`${app} still shows the disclaimer banner offline after reload`, async ({
      page,
    }, testInfo) => {
      test.skip(testInfo.project.name !== "desktop", "offline check runs on desktop only");

      await page.goto("/");
      await page.goto(prefix);
      await page.evaluate(async () => {
        await navigator.serviceWorker.ready;
      });

      await page.context().setOffline(true);
      try {
        await page.reload();
        await expect(page.getByTestId("disclaimer-banner")).toBeVisible();
      } finally {
        await page.context().setOffline(false);
      }
    });
  }
});
