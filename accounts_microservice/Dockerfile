FROM node:latest

WORKDIR /app/accounts_microservice

COPY package*.json ./

RUN npm install

# RUN npx prisma generate

COPY . .

EXPOSE 3002
# Set the entrypoint script as the command to run
COPY entrypoint.sh ./

ENTRYPOINT ["./entrypoint.sh"]
