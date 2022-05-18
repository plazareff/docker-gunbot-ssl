FROM bitnami/minideb:latest

## Setup Enviroment
ENV TZ=Europe/Paris \
  TERM=xterm-256color \
  FORCE_COLOR=true \
  NPM_CONFIG_COLOR=always \
  MOCHA_COLORS=true

## Setup pre-requisites
RUN echo 'debconf debconf/frontend select Noninteractive' | debconf-set-selections
RUN apt-get -y update && \
 apt-get install -y apt-utils

## Install additional libraries and upgrade
RUN apt-get -y upgrade && \
 apt-get install -y unzip curl sqlite fontconfig fonts-dejavu-extra ca-certificates && \
 apt-get clean -y && \
 apt-get autoclean -y && \
 apt-get autoremove -y

RUN update-ca-certificates --fresh

RUN fc-cache -fv

## Install Gunbot
WORKDIR /tmp

RUN GUNBOT_LATEST=$( \
  curl --silent "https://api.github.com/repos/GuntharDeNiro/BTCT/releases/latest" | \
  grep '"tag_name":' | \
  sed -E 's/.*"([^"]+)".*/\1/' \
  ) \
  && echo $GUNBOT_LATEST \
  && curl -Lo /tmp/lin.zip "https://github.com/GuntharDeNiro/BTCT/releases/download/$GUNBOT_LATEST/gunthy_linux.zip" \
  && unzip -q lin.zip \
  && rm -rf lin.zip \
  && rm -rf __MACOSX \
  && mv gunthy_* /gunbot \
  # && rm -f /gunbot/config.js \
  # && rm -f /gunbot/tgconfig.json \
  # && rm -f /gunbot/autoconfig.json \
  && chmod +x /gunbot/gunthy-linux

WORKDIR /gunbot

## COPY gunthy-linux /gunbot/
## RUN chmod +x /gunbot/gunthy-linux

EXPOSE 5000
VOLUME [ "/gunbot"]

CMD /gunbot/gunthy-linux
