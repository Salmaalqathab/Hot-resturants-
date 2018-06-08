// Dependencies
//========================================================
var express = require ("express");
var bodyParser = require('body-parser');
var path = require('path');

//set up the Express App
//=======================================================
var app = express();
var PORT = process.env.PORT || 3001;

//Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Hot- Restaurant Tables and wait-list (DATA)

var tables = [
{ "name":"Cintia",
  "phone": "2458",

}

];

var waitList = [
    {"name":"Salma",
    "phone": "1234",
    }
];

//Routes
// ============================================================
//Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "Reservation.html"  ));

});

app.get("/api/reserve", function(req, res) {
    return res.json(tables);
});

app.post("/api/reserve", function(req, res) {
  var newReserve = req.body;
  console.log(newReserve);

  tables.push(newReserve);
  console.log(newReserve);

  res.json(newReserve);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
