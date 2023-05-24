# Use the official Node.js 18.x base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --production

# Copy the rest of the application code to the working directory
COPY . .

# Build the TypeScript code
RUN yarn build

# Expose the port on which your application will run (replace 3000 with your desired port)
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]
