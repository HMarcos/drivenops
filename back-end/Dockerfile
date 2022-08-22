FROM node

WORKDIR /usr/src

COPY . /usr/src/

EXPOSE 5000

RUN npm i

RUN npm run prisma:generate

RUN npm run build

CMD ["npm", "start"]