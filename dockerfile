FROM node:20-alpine AS base

FROM base AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN \
  if [ -f package-lock.json ]; then npm ci; \
  else echo "Lockfile not found.❌" && exit 1; \
  fi

FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN npm run build

RUN ls .next -a

FROM base AS runner

WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/public ./public

RUN mkdir .next

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

ENV PORT 3000

ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
