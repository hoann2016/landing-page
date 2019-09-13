FROM node:10.16-alpine

RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app

ADD . /usr/src/app
ADD devOps/start-ENV.sh /usr/src/app/

EXPOSE 4200

CMD ["./start-ENV.sh"]