# ビルドステージ
FROM node:24.14.1 AS build
WORKDIR /app

# 依存関係をインストールする
COPY package.json package-lock.json ./
RUN npm ci

# ソースコードをコピーしてビルドする
COPY . .
RUN npm run build

# プロダクションステージ
FROM node:24.14.1-slim AS production
ENV NODE_ENV=production
WORKDIR /app

# 本番用の依存関係のみインストールする
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# ビルド成果物をコピーする
COPY --from=build /app/dist ./dist

# アプリケーションを起動する
CMD ["node", "dist/index.js"]
