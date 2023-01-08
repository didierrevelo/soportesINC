FROM node:10-alpine
#set a directory for the app
WORKDIR /usr/soportesINC
# copy all the files to the container
COPY . .
#install dependencies
RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]