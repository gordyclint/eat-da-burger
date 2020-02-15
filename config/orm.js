var connection = require("./connection");

var orm = {
    selectAll: function(tableName, modelCB) {
        connection.query("SELECT * FROM burgers", function(err, data){
            modelCB(data);
        })
    }
}

module.exports = orm;