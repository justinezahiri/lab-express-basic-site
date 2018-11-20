// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// homepage:
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/public/home.html');
});

//about page:
app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/public/about.html');
  });

// gallery:
app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/public/gallery.html');
  });

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});