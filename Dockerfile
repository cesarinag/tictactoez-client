FROM cesarinag/snyk-juice-shop 

MAINTAINER cesarinagarcia5@gmail.com

RUN mkdir tic-tac-toe
RUN npm install

COPY index.html 

CMD ["npm", "start"]