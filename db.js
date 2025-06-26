var mysql = require('mysql2');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'plain',
    database: 'one'
});
db.connect();

module.exports = db;