const express = require("express");
const app = express();


app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});
// PC
app.get("/comandos", (request, response) => {
  response.sendFile(__dirname + "/views/comandos.html");
});

app.get("/emojis", (request, response) => {
  response.sendFile(__dirname + "/views/emojis.html");
});

app.get("/team", (request, response) => {
  response.sendFile(__dirname + "/views/team.html");
});

app.get("/servidores", (request, response) => {
  response.sendFile(__dirname + "/views/servers.html");
});

// MOBILE 

app.get("/mobile", (request, response) => {
  response.sendFile(__dirname + "/views/m/index.html");
});

app.get("/mobile/comandos", (request, response) => {
  response.sendFile(__dirname + "/views/m/comandos.html");
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Porta " + listener.address().port);
});
