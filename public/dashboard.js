var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const fetch = require("node-fetch");
const FormData = require("form-data");

const axios = require("axios");
const process = require("process");
app.use(bodyParser.text());

app.get("/dashboard", function (req, res) {
  res.render(__dirname + "/views/" + "dashboard.html");
});
app.post("/dashboard", function (req, res) {
  
});
app.listen(process.env.PORT);
