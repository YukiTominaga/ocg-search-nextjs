# ベースイメージ
FROM node:22-alpine AS base
WORKDIR /app

# 依存関係のインストール
FROM base AS deps
RUN apk add --no-cache libc6-compat
COPY package*.json ./
RUN npm ci

# ビルド
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# 本番環境
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# 必要なファイルのみをコピー
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Cloud Run用の設定
EXPOSE 3000

# サーバー起動
CMD ["node", "server.js"]
