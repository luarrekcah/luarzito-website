const express = require("express");
const app = express();


app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/comandos", (request, response) => {
  response.sendFile(__dirname + "/views/team.html");
});

app.get("/team", (request, response) => {
  response.sendFile(__dirname + "/views/team.html");
});

app.get("/team", (request, response) => {
  response.sendFile(__dirname + "/views/team.html");
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Porta " + listener.address().port);
});
