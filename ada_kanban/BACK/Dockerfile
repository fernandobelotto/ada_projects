FROM node:20-alpine AS development

WORKDIR /usr/src/app

RUN npm install -g pnpm@10.34.5

COPY package.json pnpm-lock.yaml ./

RUN pnpm add glob rimraf

RUN pnpm install --frozen-lockfile --dev

COPY . .

RUN pnpm run build

FROM node:20-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

RUN npm install -g pnpm@10.34.5

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile --prod

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]
