var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    PORT: 3306,
    user: "root",
    password: "Cagman14",
    database: "burgers_db"
});

connection.connect(function(err) {
    console.log("Connection ID", connection.threadId);
});

module.exports = connection;