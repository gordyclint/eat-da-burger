var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        PORT: 3306,
        user: "root",
        password: "Cagman14",
        database: "burgers_db"
    });
};

connection.connect(function(err) {
    console.log("Connection ID", connection.threadId);
});

module.exports = connection;