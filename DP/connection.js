// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    database: 'nodedb',
    user: 'root',
    password:''
  });


  module.exports = connection