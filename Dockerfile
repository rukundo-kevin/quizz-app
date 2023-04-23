FROM node:alpine

RUN mkdir -p /usr/src/quiz-app && chown -R node:node /usr/src/quiz-app

WORKDIR /usr/src/quiz-app

COPY package.json package.lock ./

USER node

RUN npm install --pure-lockfile

COPY --chown=node:node . .

EXPOSE 3000