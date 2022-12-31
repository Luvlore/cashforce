FROM node:16.18

WORKDIR /app/frontend

COPY package* ./

RUN npm install -g yarn

RUN yarn install

COPY . .

CMD [ "yarn", "serve" ] 