const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
  /*response.sendStatus(200);
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(
    `Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`
  );*/
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

// BOT
const Discord = require("discord.js");
const http = require("http");
const moment = require("moment");
const bot = new Discord.Client();
const { Util } = require("discord.js");
const fs = require("fs");
const firebase = require("firebase");
const prefixo = "dg."

bot.on("ready", () => {
  console.log("Bot preparado.\nLogado como: " + bot.user.username)
});

try {
  console.log("Tentando logar na api do dc");
  bot.login(process.env.tokenBot);
} catch (e) {
  console.log("Erro ao logar na api do dc: ", e);
}

const listener = app.listen(process.env.PORT, () => {
  console.log("Porta " + listener.address().port);
});
