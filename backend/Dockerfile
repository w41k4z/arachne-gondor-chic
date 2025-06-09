FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Expose server port
EXPOSE 5000

# Run the server
CMD ["npm", "run", "start"]
