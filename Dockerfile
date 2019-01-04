FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY build /usr/share/nginx/html/build
COPY posts/content /usr/share/nginx/html/content
