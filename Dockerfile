FROM node:10.16-alpine

RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app

ADD . /usr/src/app

RUN npm install

EXPOSE 4200

CMD [ "npm", "start:ENV"]