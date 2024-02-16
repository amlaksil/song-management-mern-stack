# Use the official Node.js Docker image as the base image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /home/node/app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application files from the host machine to the WORKDIR
COPY . . 

# Expose the application port
EXPOSE 3000

# Set the startup command to run the Node.js application
CMD [ "npm", "run", "start-server"]
