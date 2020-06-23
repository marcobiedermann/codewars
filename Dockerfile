FROM node:14-alpine as base
WORKDIR /usr/src/app
ARG NODE_ENV
COPY package*.json ./
RUN npm install --only=production --loglevel=warn
COPY . .

# Development
FROM base as development
RUN npm install --only=development --loglevel=warn

CMD [ "npm", "run", "test" ]