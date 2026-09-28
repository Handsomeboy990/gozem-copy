# syntax=docker/dockerfile:1
#
# This image does NOT build the apps. The sandbox's outbound network cannot
# sustain pnpm's concurrent registry fetches (registry.npmjs.org connections
# time out under load even with reduced concurrency and retries, and with
# build.network: host), so `pnpm install` / `pnpm run build` must be run on
# the host first (see README). This stage only packages the prebuilt
# apps/*/dist output that pnpm produced on the host.
FROM nginx:alpine AS runtime
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY apps/website/dist /usr/share/nginx/html
COPY apps/customer/dist /usr/share/nginx/html/app
COPY apps/driver/dist /usr/share/nginx/html/driver
COPY apps/merchant/dist /usr/share/nginx/html/merchant
COPY apps/admin/dist /usr/share/nginx/html/admin

EXPOSE 80
