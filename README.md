# Gozem copy (mockup)

Non-affiliated reproduction, for testing purposes only.

## Run

```
pnpm install
pnpm dev      # all five apps in parallel, Vite dev servers
pnpm build    # all five apps, production build
docker compose up --build   # single nginx container, port 8080
```

## Entry URLs

| App | URL (dev, per-app Vite port) | URL (docker, single container) |
|---|---|---|
| Website | see Vite output | http://localhost:8080/ |
| Customer | see Vite output | http://localhost:8080/app/ |
| Driver | see Vite output | http://localhost:8080/driver/ |
| Merchant | see Vite output | http://localhost:8080/merchant/ |
| Admin | see Vite output | http://localhost:8080/admin/ |
