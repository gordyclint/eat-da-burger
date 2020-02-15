var express = require('express');
var app = express();

var PORT = process.env.PORT || 8080;

var expressHandlebars = require('express-handlebars');
app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

var burgerController = require('./controllers/burgercontroller');
burgerController(app);

app.listen(PORT, function() {
    console.log("App is listening on http://localhost:" + PORT);
});