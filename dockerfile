# Build
FROM node:latest AS build
WORKDIR /usr/TeleInstaFrotend
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Start
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/TeleInstaFrotend/dist/tele-insta /usr/share/nginx/html