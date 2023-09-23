#!/bin/sh

MIGRATION_STATUS=$(npx prisma migrate status)

if echo "$MIGRATION_STATUS" | grep -q "Database schema is up to date"; then
    echo "No migrations needed."
else
    echo "Running tables schema generation..."
    npx prisma generate
    echo "Running migrations..."
    npx prisma migrate deploy
    echo "Migrations done..."
    npm run start
fi

npm start