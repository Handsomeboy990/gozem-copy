# syntax=docker/dockerfile:1
FROM node:24-alpine AS build
WORKDIR /repo
RUN npm install -g pnpm@11.17.0

COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY packages ./packages
COPY apps ./apps

RUN pnpm install --frozen-lockfile=false
RUN pnpm run build

FROM nginx:alpine AS runtime
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /repo/apps/website/dist /usr/share/nginx/html
COPY --from=build /repo/apps/customer/dist /usr/share/nginx/html/app
COPY --from=build /repo/apps/driver/dist /usr/share/nginx/html/driver
COPY --from=build /repo/apps/merchant/dist /usr/share/nginx/html/merchant
COPY --from=build /repo/apps/admin/dist /usr/share/nginx/html/admin

EXPOSE 80
