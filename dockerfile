FROM oven/bun:1 as base

FROM base AS deps

WORKDIR /app

COPY package.json ./
RUN bun install

FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN bun run build

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

CMD ["bun", "server.js"]
