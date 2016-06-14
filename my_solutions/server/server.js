'use strict';

// Creating base routes
const express = require('express');

// Creating APP
const app = express();

// Allow CORS
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
};
app.use(allowCrossDomain);

// ROUTE for API
app.get('/api/v1/people', (req, res) => {
  const peoples = require('./models/Peoples')();
  // How we are using JSON the response use the function json
  res.status(202).json(peoples);
});

// Creating and Listening the SERVER
app.listen(595, () => console.log('http://localhost:595'));
