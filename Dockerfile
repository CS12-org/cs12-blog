FROM node:20-alpine AS builder
WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

# Build
RUN yarn build

FROM node:20-alpine

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --production --frozen-lockfile

COPY --from=builder /app/build ./build

EXPOSE 3000

CMD ["yarn", "start"]
