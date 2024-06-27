FROM node:22
WORKDIR /app
COPY package*.json ./
COPY . .
EXPOSE 3007
CMD npm run start
