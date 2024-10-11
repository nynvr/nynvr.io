#!/bin/sh

# Check if we're in development mode
if [ "$NODE_ENV" = "development" ]; then
    echo "Running in development mode..."

    # For development
    npm run dev
else
    echo "Running in production mode..."

    npm run build
    # For production
    npm run start
fi
