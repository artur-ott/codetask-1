FROM node:8.6.0

# Pass secret variables via buildargs, see https://github.com/dokku/dokku/issues/1860
ARG FIREBASE_API_KEY=changeme
ENV FIREBASE_API_KEY ${FIREBASE_API_KEY}

# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies:
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /usr/src/app && cp -a /tmp/node_modules /usr/src/app

# From here we load our application's code in, therefore the previous docker
# "layer" thats been cached will be used if possible
WORKDIR /usr/src/app
ADD . /usr/src/app

RUN npm run build
RUN rm -rf ./build
RUN rm -rf ./test
RUN rm -rf ./src

ENV PORT=443
EXPOSE 80 443

CMD npm start
