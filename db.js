var mysql = require('mysql2');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'plain',
    database: 'plain_edu'
});
db.connect();

module.exports = db;