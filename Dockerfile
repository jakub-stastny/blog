# Runs on 8080.
FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf.template
COPY build /usr/share/nginx/html/build
CMD /bin/sh -c "envsubst < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf && cat /etc/nginx/nginx.conf && exec nginx-debug -g 'daemon off;'"
