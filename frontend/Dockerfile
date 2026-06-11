# Stage 1: build React app
# FROM node:20-alpine AS build
FROM node:20-alpine

WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5173
CMD ["npm", "run", "dev"]

# # Stage 2: serve with nginx
#FROM nginx:alpine
#COPY --from=build /app/build /usr/share/nginx/html
#EXPOSE 80
