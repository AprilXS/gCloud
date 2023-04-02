FROM node:14.16.0-alpine3.13
WORKDIR .
copy package*.json .
RUN npm install
COPY . .
CMD node server.js