# First stage: Build
FROM node:20-alpine AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the source code
COPY . .

# Build the project
RUN npm run build

# Second stage: Production
FROM nginx:alpine

# Set the working directory
WORKDIR /usr/share/nginx/html

# Remove the default Nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy the build output and public assets from the build stage
COPY --from=build /app/build/client /usr/share/nginx/html

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Ensure proper permissions for Nginx directories
RUN chmod -R 755 /usr/share/nginx/html

# Expose the port
EXPOSE 4173

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
