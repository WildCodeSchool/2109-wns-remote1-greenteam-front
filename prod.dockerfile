FROM node:16-alpine AS build

WORKDIR /app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn

COPY ./public ./public
COPY ./src ./src
COPY ./tsconfig.json ./
COPY ./craco.config.js ./
COPY ./tailwind.config.js ./
COPY .eslintrc.js .
COPY .prettierrc.json .
COPY .eslintignore .

RUN yarn build

FROM node:16-alpine AS serve

WORKDIR /app

COPY --from=build /app/build build
CMD npx serve ./build