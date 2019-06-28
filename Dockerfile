FROM nginx:alpine
RUN apk add nodejs nodejs-npm && apk update
ARG CONFIGURATION

COPY . /
RUN npm install
RUN npm run-script build-$CONFIGURATION
RUN ls
RUN mv public/index.html /usr/share/nginx/html
RUN mv dist /usr/share/nginx/html