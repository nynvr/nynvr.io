# Use an official Node runtime as the parent image
FROM node:20.18-slim

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY ./app/package*.json ./

# Install dependencies
RUN npm install

# Copy the current directory contents into the container at /app
COPY ./app .
COPY ./environments/production/run.sh /scripts/
COPY ./environments/production/next.config.mjs /app/

EXPOSE 80

RUN chmod +x /scripts/run.sh
CMD ["/scripts/run.sh"]