var orm = require('../config/orm');

var burger = {
 selectAll: function (controllerCB) {
    orm.selectAll('burgers', function (data) {
        controllerCB(data)
    })
    }
}

module.exports = burger;