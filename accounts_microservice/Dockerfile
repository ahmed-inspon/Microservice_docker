FROM node:latest

WORKDIR /app/accounts_microservice

COPY package*.json ./

RUN npm install

RUN npx prisma generate

COPY . .

EXPOSE 3002

RUN npx prisma generate
CMD ["npm","run","start"]