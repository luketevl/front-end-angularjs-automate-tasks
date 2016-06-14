'use strict';

// Creating base routes
const express = require('express');

// Creating APP
const app = express();

// ROUTE for API
app.get('/api/v1/people', (req, res) => {
  const peoples = require('./models/Peoples')();

  // How we are using JSON the response use the function json
  res.json(peoples);
});

// Creating and Listening the SERVER
app.listen(595, () => console.log('http://localhost:595'));
