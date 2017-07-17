'use strict';

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'db_host',
  port: 'db_port',
  user: 'db_user',
  password: 'db_password',
  socketPath: 'db_socketPath',
  database: 'db_database'
});

module.exports = connection;
