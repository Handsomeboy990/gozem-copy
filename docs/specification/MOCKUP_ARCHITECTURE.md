# Mockup architecture

## Stack

| Choice | Justification |
|---|---|
| Vite 5 | Fastest dev/build loop, near-zero config, fits a 60 minute build |
| React 18 | Team familiarity, largest component ecosystem, fast to scaffold five apps |
| TypeScript 5 | Shared types for fake data and i18n keys catch mismatches across 3 parallel engineers |
| React Router 6 | Simple nested routes per app prefix, no server needed for a static PWA |
| vite-plugin-pwa 0.20 | Generates manifest and service worker (Workbox) with near-zero config |
| Zustand 4 | Tiny local state (language, fake session) without a backend or Redux ceremony |
| CSS Modules + design tokens (CSS custom properties) | No CSS framework lock-in, tokens map directly to Gozem brand colours |
| pnpm workspaces | Single repo, isolated packages per app, fast installs on a 16 GB machine |
| nginx:alpine | Tiny static file server, low memory footprint, standard PWA header support |
| Playwright 1.47 | One tool for smoke tests across all five apps and both languages |

## Repository layout

```
packages/
  design-system/      # tokens, shared components, Banner, i18n runtime
  fake-data/           # shared TS types + seed generators (rides, orders, wallet, users)
  i18n/                # fr/ and en/ dictionaries, one file per app namespace
apps/
  customer/   -> route prefix /app
  driver/     -> route prefix /driver
  merchant/   -> route prefix /merchant
  admin/      -> route prefix /admin
  website/    -> route prefix /
docker/
  Dockerfile, nginx.conf
docker-compose.yml
```
Each app is its own pnpm package with its own `src/`; engineers only touch their app folder plus read-only imports from `packages/*`.

## Fixed contracts (before parallel work starts)

- `packages/design-system/tokens.css`: colour, spacing, radius, font tokens, frozen before split.
- `packages/design-system` component list: `Banner`, `Button`, `Input`, `OtpInput`, `Card`, `BottomNav`, `TopBar`, `LanguageSwitch`, `EmptyState`.
- `packages/fake-data/types.ts`: `User`, `Ride`, `Order`, `WalletTx`, `Vehicle`, `Merchant` interfaces, seeded with Benin data (XOF, +229, Cotonou communes).
- i18n key naming: `app.section.key` (e.g. `driver.trip.accept`), one JSON per app namespace in `fr/` and `en/`, no shared free keys.
- Route map convention: each app exports `routes.ts` with a typed path list; no cross-app route imports.
- `Banner` is a single shared component, fixed height, rendered by a root layout in every app, non-dismissible.

## PWA, offline, docker, tests

- Single manifest and service worker per app build (vite-plugin-pwa, `generateSW`), precaching the app shell; offline fallback page per app.
- OTP screen shows the fixed code as static text, no network call.
- Docker: multi-stage build (pnpm build per app) then nginx:alpine serves `/dist` per app under its route prefix; `mem_limit: 256m` per service in compose, single shared nginx container preferred over five to stay inside 16 GB.
- Tests: Playwright smoke suite, one spec per route, asserting banner presence, language switch, and offline shell load after first visit; run after each app is ready, not blocking parallel work.

## Risks

- Five apps under one nginx container risk route collisions; mitigate with strict path prefixes tested before merge.
- Service worker caching stale builds during rapid iteration; mitigate with short cache TTL in dev.
- 60 minute window leaves no slack for design-system rework once split; freeze contracts first.
