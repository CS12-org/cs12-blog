FROM node:20-bookworm AS builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM node:20-bookworm
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn cache clean && yarn install --frozen-lockfile
COPY --from=builder /app/build ./build
EXPOSE 3000
CMD ["yarn", "start"]
