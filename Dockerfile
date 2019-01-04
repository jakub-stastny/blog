FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY build /usr/share/nginx/html
COPY posts/content /usr/share/nginx/html
