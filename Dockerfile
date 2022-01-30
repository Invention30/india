
FROM node:16
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node Rockwell_express.js
EXPOSE 8081
