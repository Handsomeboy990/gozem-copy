# Gozem copy (mockup)

Non-affiliated reproduction, for testing purposes only.

## Run

```
pnpm install
pnpm dev      # all five apps in parallel, Vite dev servers
pnpm build    # all five apps, production build; run this first, on the host
docker compose up --build   # packages the apps/*/dist output above into nginx, port 8080
```

The `docker compose build` step does not run `pnpm install` itself: this
sandbox's outbound network cannot sustain pnpm's concurrent registry fetches
inside the build container (connections to registry.npmjs.org time out under
load, with or without `build.network: host`), while a plain `pnpm install`
and `pnpm run build` on the host succeed. Run `pnpm install && pnpm run build`
on the host before `docker compose up --build`; the image only copies the
resulting `apps/*/dist` folders into an nginx runtime layer.

## Entry URLs

| App | URL (dev, per-app Vite port) | URL (docker, single container) |
|---|---|---|
| Website | see Vite output | http://localhost:8080/ |
| Customer | see Vite output | http://localhost:8080/app/ |
| Driver | see Vite output | http://localhost:8080/driver/ |
| Merchant | see Vite output | http://localhost:8080/merchant/ |
| Admin | see Vite output | http://localhost:8080/admin/ |
