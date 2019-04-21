FROM node:alpine

COPY server.js /app/server.js
COPY build /app/build
WORKDIR /app/build

CMD node --harmony --experimental-modules /app/server.js
