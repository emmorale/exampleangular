# Stage 1: Build the Angular app
FROM node:14 AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Stage 2: Serve the Angular app using Node.js's http-server
FROM node:14
WORKDIR /usr/src/app

# Copy the built Angular application from Stage 1
COPY --from=build /usr/src/app/dist/hello-angular ./dist/hello-angular
COPY server ./server

EXPOSE 8080

# Install express to serve the application
RUN npm install express

CMD ["node", "server/server.js"]
