FROM node:alpine

WORKDIR /app

RUN npm install -g pnpm@10.34.5

COPY package.json pnpm-lock.yaml /app

RUN pnpm install --frozen-lockfile

COPY . .

CMD ["pnpm","run", "start"]
