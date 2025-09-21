# STAGE 1: Build the React application
# Use a lightweight Node.js image for the build stage
FROM node:24-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the React application for production
RUN npm run build

# STAGE 2: Serve the application with NGINX
# Use a lean NGINX image
FROM nginx:alpine

# Copy the custom NGINX configuration
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built files from the 'builder' stage into the NGINX web server root
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# The default command to start NGINX
CMD ["nginx", "-g", "daemon off;"]
