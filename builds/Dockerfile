# ステージ1: ビルド環境
FROM node:22-alpine AS builder

# 作業ディレクトリを設定
WORKDIR /app

# package.json と package-lock.json をコピー
COPY package.json ./
COPY package-lock.json ./

# 依存関係をインストール
RUN npm ci

# ソースコードをコピー
COPY . .

# Next.js アプリケーションをビルド
RUN npm run build

# ステージ2: 本番環境
FROM node:22-alpine AS runner

WORKDIR /app

# 環境変数 NODE_ENV を production に設定
ENV NODE_ENV=production

# Next.js の実行に必要なユーザーとグループを作成 (セキュリティ向上のため)
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# ビルドステージから必要なファイルをコピー
# .next/standalone を利用する場合 (Next.js 12.2以降推奨)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# ユーザーを切り替え
USER nextjs

# Next.js が使用するポートを公開
EXPOSE 3000

# アプリケーションを起動
CMD ["node", "server.js"]
