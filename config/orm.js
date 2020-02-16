const connection = require("./connection");

const orm = {
    selectAll: function(tableName, modelCB) {
        connection.query("SELECT * FROM burgers", function(err, data){
            if (err) {
                throw err;
            };
            modelCB(data);
        })
    },
    create: function(tableName, columns, newBurger, modelCB) {
        connection.query("INSERT INTO ?? (??, ??) VALUES (?, ?) ", 
        [tableName, ...columns, newBurger.burger_name, false], function(err, data) {
            if(err) {
                throw err;
            };
            modelCB(data);
        }
        )
    },
    update: function(tableName, columns, newBurger, modelCB) {
        let devoured = newBurger.devoured === "true";

        connection.query("UPDATE ?? SET ?? = ? WHERE ?? = ?", [tableName, columns[0], devoured, columns[1], newBurger.id], 
        function(err, data) {
            if (err) {
                throw err;
            };
            modelCB(data);
        })
    },
    delete: function(tableName, column, id, modelCB) {
        connection.query("DELETE FROM ?? WHERE ?? = ?", [tableName, column, id], function(err, data) {
            if(err) {
                throw err;
            };
            modelCB(data);
        })
    }


}

module.exports = orm;