# Mircoservice Docker

3 microservices based docker app using nginx as an api gateway.

## Description

These are the list of microservices

### * User Microservice   

This microservice is based on nest js with mongodb having graphql server.

### * Accounts Microservice   

This microservice is based on express js with mysql having prisma as an orm and graphql server.

### * Contacts Microservice   

This microservice is based on laravel & mysql having graphql server.

## Starting Docker

Use below command to start docker.

```
docker-compose up -d --build
```

After this you need to do prisma migration.

```
docker exec accounts-ms-container npx prisma migrate deploy
```

## Current Features

Currently you can create user, fetch users, create contacts, get contacts, when you are creating user, redis-pub-sub is creating account entity on other microservice.
All of microservices are using nginx for api gateway.

## Challenges

Currently I am having difficulty to integrate postgres with laravel in docker-compose,
Currently we are having manual running of docker exec for prisma migration, we need to do this automation.