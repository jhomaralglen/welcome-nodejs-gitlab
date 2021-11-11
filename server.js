let express = require('express');
let app = express();
let morgan = require('morgan');
let bodyParser = require('body-parser');
let port = 9000;

app.get("/", (req, res) => res.json({message: "Welcome to Your App"}));

app.get("/health", (req, res) => res.json({message: "Healthy"}));


app.listen(port);
console.log("Listening on port " + port);

module.exports = app; // for testing