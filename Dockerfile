FROM node:13.13-alpine3.10

ENV APP_PATH=/usr/src/app \
    PORT=3000

WORKDIR ${APP_PATH}

COPY package.json package-lock.json ./

RUN npm install

COPY . ./

EXPOSE ${PORT}

CMD npm run dev