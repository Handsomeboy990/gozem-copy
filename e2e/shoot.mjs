import { spawn } from "node:child_process";
import { chromium } from "playwright";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import http from "node:http";
import net from "node:net";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");

const PORT = 4400;
const SERVER_STARTUP_TIMEOUT = 5000;

// Parse arguments: node shoot.mjs <outDir> <route> [<route> ...]
const args = process.argv.slice(2);
if (args.length < 2) {
  console.error(
    "Usage: node shoot.mjs <outDir> <route> [<route> ...]"
  );
  process.exit(1);
}

const outDir = args[0];
const routes = args.slice(1);

// Ensure output directory exists
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Convert route to filename: /app/home -> app_home.png
function routeToFilename(route) {
  return route
    .replace(/^\//, "")
    .replace(/\/$/, "")
    .replace(/\//g, "_")
    .concat(".png");
}

// Check if port is already in use
async function isPortInUse(port) {
  return new Promise((resolve) => {
    const sock = new net.Socket();
    sock.once("connect", () => {
      sock.destroy();
      resolve(true);
    });
    sock.once("error", () => resolve(false));
    sock.connect(port, "127.0.0.1");
  });
}

// Wait for server to be ready
async function waitForServer(port, timeout = SERVER_STARTUP_TIMEOUT) {
  const startTime = Date.now();
  while (Date.now() - startTime < timeout) {
    try {
      await new Promise((resolve, reject) => {
        const req = http.get(`http://localhost:${port}/`, (res) => {
          resolve();
        });
        req.on("error", reject);
      });
      return true;
    } catch {
      await new Promise((r) => setTimeout(r, 100));
    }
  }
  throw new Error(`Server did not start within ${timeout}ms`);
}

// Start serve.mjs on port 4410
let serverProcess = null;
let serverStarted = false;

async function ensureServer() {
  try {
    await waitForServer(PORT, 100);
    console.log(`Server already running on port ${PORT}`);
    return;
  } catch {
    // Server not running, start it
  }

  console.log(`Starting server on port ${PORT}...`);
  serverProcess = spawn("node", [path.join(__dirname, "serve.mjs")], {
    stdio: "inherit",
  });

  await waitForServer(PORT);
  serverStarted = true;
  console.log(`Server started on port ${PORT}`);
}

// Main function
async function shoot() {
  try {
    await ensureServer();

    const browser = await chromium.launch({
      args: ["--disable-blink-features=AutomationControlled"],
    });

    const context = await browser.newContext({
      viewport: { width: 375, height: 812 },
      deviceScaleFactor: 1,
      serviceWorkers: "block",
    });

    let screenshotCount = 0;

    for (const route of routes) {
      const page = await context.newPage();
      try {
        const url = `http://localhost:${PORT}${route}`;
        console.log(`Capturing ${route}...`);
        await page.goto(url, { waitUntil: "networkidle" });

        const filename = routeToFilename(route);
        const filepath = path.join(outDir, filename);
        await page.screenshot({ path: filepath, fullPage: false });
        console.log(`  -> ${filename}`);
        screenshotCount++;
      } finally {
        await page.close();
      }
    }

    await context.close();
    await browser.close();

    console.log(`\nCaptured ${screenshotCount} screenshots to ${outDir}`);
    return screenshotCount;
  } finally {
    if (serverStarted && serverProcess) {
      serverProcess.kill();
    }
  }
}

shoot()
  .then((count) => {
    console.log(`Done: ${count} PNGs written`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
