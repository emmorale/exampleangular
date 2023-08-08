# Stage 1: Build the Angular app
FROM node:16 AS build

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build --prod

# Stage 2: Serving the Angular app
FROM node:16-alpine

RUN apk add --no-cache tini

WORKDIR /usr/src/app

# Copy the built Angular application from Stage 1
COPY --chown=node:node --from=build /usr/src/app/dist/hello-angular ./dist/hello-angular

COPY --chown=node:node server ./server

RUN chown -R node:node .

USER node

EXPOSE 8080

RUN npm install express

ENTRYPOINT [ "/sbin/tini", "--" ]

CMD ["node", "server/server.js"]
