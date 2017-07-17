'use strict';

// Environment variables
const MODE = process.env.NODE_ENV;

// Modules
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

// App
const {
  createDateString,
  createID,
  createUTCTimestamp,
  logRouteMetadata,
  parseISODate,
  print,
} = require('./functions.js');
const {
  message,
  success,
  error,
  highlight,
} = require('./chalkPresets.js');
const db = require('./database.js');
const port = 7777;
const server = express();

server.set('views', './views');
server.set('view engine', 'pug');
server.use('/assets', express.static('static'));
server.use(bodyParser.json()); // to support JSON-encoded bodies
server.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);

print(createDateString());

server.listen(port, () => {
  print();
  print(success(`App running at http://localhost:${port}`));
  print();
});

server.get('/', (req, res) => {
  logRouteMetadata(req);
  res.render('index');
});