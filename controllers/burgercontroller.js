const burgerModels = require("../models/burgermodels");

function burgerController (app) {
     
    app.get("/", function (req, res) {
        burgerModels.selectAll(function(data) {
                
            res.render("index", {burgers: data});
        });
    });

    app.post("/api/burgers", function(req, res) {
        burgerModels.create(req.body, function(data) {
            res.json(data);
        });
    });

    app.put("/api/burgers/:id", function(req, res) {
        const newBurger = req.body;
        newBurger.id = req.params.id;

        console.log(newBurger);

        burgerModels.update(newBurger, function(data) {
            res.json(data);
        })
    });

    app.delete("/api/burgers/:id", function(req, res) {
        const id = req.params.id;
        console.log(id);
        burgerModels.delete(id, function(data) {
            res.json(data);
        })
    });

};

module.exports = burgerController;