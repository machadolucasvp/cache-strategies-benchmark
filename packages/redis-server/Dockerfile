FROM node:14-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --silent --production
COPY ./ ./

CMD ["node", "src/server.js"]