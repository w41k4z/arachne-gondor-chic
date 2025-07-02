# Use Node.js LTS version
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app code
COPY . .

# Build the app
RUN npm run build

# Expose frontend port
EXPOSE 3000

# Start the app
CMD ["npm", "run", "start"]
