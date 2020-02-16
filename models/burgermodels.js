var orm = require('../config/orm');

var burger = {
 selectAll: function (controllerCB) {
    orm.selectAll('burgers', function (data) {
        controllerCB(data)
    })
    },

    create: function(newBurger, controllerCB) {
        orm.create("burgers", ["burger_name", "devoured"], newBurger, function(data){
            controllerCB(data);
        })
    },

    update: function(newBurger, controllerCB) {
        orm.update("burgers", ["devoured", "id"], newBurger, function(data) {
            controllerCB(data);
        })
    },

    delete: function(id, controllerCB) {
        orm.delete("burgers", "id", id, function(data) {
            controllerCB(data);
        })
    }

}

module.exports = burger;