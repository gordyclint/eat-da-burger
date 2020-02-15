const burgerModels = require("../models/burgermodels");

function burgerController (app) {
     
    app.get("/", function (req, res) {
        burgerModels.selectAll(function(data) {
                
            res.render("index", {burgers: data});
        });
    });

    app.post("/api/")


};

module.exports = burgerController;