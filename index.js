'use strict';

// ANCHOR initialize the server and graphql, set routes and port for the server
const express = require('express');
const expressGraphQl = require('express-graphql');
const Schema = require('./schema');
const {root} = require('./resolver');

// Initialize Express server
const app = express();

// Set Routes
app.get('/', (req, res) => {
  return res.json({
    msg: 'Welcome to my GQL World',
  });
});

// Use express to initalize graphqql
app.use(
  '/graphql',
  expressGraphQl({
    schema: Schema,
    rootValue: root,
    graphiql: true,
  })
);

// Listen for the port
app.listen(3000, () => {});
