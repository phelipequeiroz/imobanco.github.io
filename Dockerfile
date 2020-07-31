FROM node

# set work directory
WORKDIR /app

# Requirements have to be pulled and installed here, otherwise caching won't work
COPY package.json package.json
RUN npm install

COPY . /app