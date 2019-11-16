# TODO: putting in missing info
FROM ${AWS_ACCOUNT_ID}.dkr.ecr.${REGION}.amazonaws.com/root:1.0
LABEL version="1.0"
LABEL maintainer="Ken Lu <a26331057@gmail.com>"
RUN apk update \
  && apk upgrade \
  && apk add --update nodejs \
  && apk add --update npm

RUN npm install -g node-gyp yarn

WORKDIR /
