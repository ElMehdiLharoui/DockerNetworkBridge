FROM node:14

WORKDIR /MyApp

COPY package.json .

RUN npm install

COPY . .

EXPOSE 27017

CMD [ "node","index.js" ]