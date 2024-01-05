FROM node:20-slim

WORKDIR /home/webflix



RUN apt-get update && apt-get install -y git

RUN git clone https://github.com/Cyrhades/webflix ./
COPY .env .env

RUN npm i

EXPOSE 80

CMD ["npm", "start"]

