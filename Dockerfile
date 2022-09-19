FROM node:lts

RUN mkdir /data

COPY ./ /data/

WORKDIR /data

RUN npm install \
&& npm install -g @quasar/cli \
&& quasar build

WORKDIR /data/dist/spa

CMD [ "quasar", "serve", "-a", "0.0.0.0", "-p", "8080" ]
