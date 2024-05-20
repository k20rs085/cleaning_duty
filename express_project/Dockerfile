FROM node:16.13.1-alpine

WORKDIR /usr/src/app

COPY ./package* ./
COPY ./yarn* ./

RUN yarn

COPY . .

EXPOSE 3001

CMD yarn start