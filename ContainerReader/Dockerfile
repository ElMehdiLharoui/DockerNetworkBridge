FROM node:14

WORKDIR /App

COPY package.json .

RUN npm install 

COPY . .

EXPOSE 4000

CMD [ "node","index.js" ]
