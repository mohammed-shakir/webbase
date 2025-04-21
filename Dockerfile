# STAGE 1 deps
FROM node:23-slim AS deps
WORKDIR /usr/src/app

# copy lockfiles first for caching
COPY package.json package-lock.json ./
RUN npm ci

# STAGE 2 builder
FROM node:23-slim AS builder
WORKDIR /usr/src/app
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .
RUN npm run build

# STAGE 3 prod-deps
FROM node:23-slim AS prod-deps
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# STAGE 4 runner
FROM node:23-slim AS runner
WORKDIR /usr/src/app

# create a non-root user to run our app
RUN groupadd --gid 1000 appgroup \
    && useradd  --uid 1000 --gid appgroup --shell /bin/sh --create-home appuser

ENV NODE_ENV=production

EXPOSE 3000

# copy only what we need
COPY --chown=appuser:appgroup --from=prod-deps /usr/src/app/node_modules ./node_modules
COPY --chown=appuser:appgroup --from=builder  /usr/src/app/.next/standalone   ./standalone
COPY --chown=appuser:appgroup --from=builder  /usr/src/app/.next/static       ./.next/static
COPY --chown=appuser:appgroup --from=builder  /usr/src/app/public            ./public
COPY --chown=appuser:appgroup --from=builder  /usr/src/app/next.config.ts     ./next.config.ts
COPY --chown=appuser:appgroup --from=builder  /usr/src/app/package.json       ./package.json

# simple healthcheck on the port
HEALTHCHECK --interval=30s --timeout=5s \
    CMD wget --no-verbose --tries=1 --spider http://localhost:3000 || exit 1

USER appuser

# launch the built-in standalone server
CMD ["node", "standalone/server.js"]
