FROM node:alpine

ENV REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID UA-138694948-1
ENV REACT_APP_CONTACT_EMAIL james+blog@botanicus.me

COPY server.js /app/server.js
COPY build /app/build
WORKDIR /app/build

CMD node --harmony --experimental-modules /app/server.js
