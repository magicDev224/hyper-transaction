FROM node:10.14.1

WORKDIR /usr/src/app

# Install dependecies
COPY package*.json ./
RUN npm i -g nodemon
RUN npm install

# Copy project files
COPY . .

CMD npm start

EXPOSE 3000