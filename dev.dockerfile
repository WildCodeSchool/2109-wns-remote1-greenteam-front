FROM node:16-alpine

WORKDIR /app

COPY ./package.json ./

RUN yarn

COPY ./public ./public
COPY ./src ./src
COPY ./tsconfig.json ./
COPY ./craco.config.js ./
COPY ./tailwind.config.js ./
COPY .eslintrc.js .
COPY .prettierrc.json .
COPY .eslintignore .

CMD yarn start