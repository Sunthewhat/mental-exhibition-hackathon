FROM node:latest as base

FROM base AS deps

WORKDIR /app

COPY package.json ./
COPY prisma ./prisma/
RUN npm i
RUN npm i sharp

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

ENV NODEMAILER_EMAIL charana.sukr@mail.kmutt.ac.th

ENV NODEMAILER_PASS wsak vsfc pyyg atol

CMD ["node", "server.js"]
