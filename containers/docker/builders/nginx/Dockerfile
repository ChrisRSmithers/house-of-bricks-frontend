FROM openresty/openresty:alpine-fat
LABEL version="1.0"
LABEL maintainer="Ken Lu <a26331057@gmail.com>"
RUN apk add --no-cache bash
COPY ./nginx.conf /usr/local/openresty/nginx/conf/nginx.conf
COPY ./resources /usr/local/openresty/nginx/resources
RUN rm /usr/local/openresty/nginx/html/index.html
RUN ln -sf /dev/stdout /usr/local/openresty/nginx/logs/access.log
RUN ln -sf /dev/stderr /usr/local/openresty/nginx/logs/error.log
CMD /bin/bash -c "/usr/local/openresty/nginx/resources/init.sh && nginx -g 'daemon off;'"
