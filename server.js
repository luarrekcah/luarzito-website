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

// BOT
const Discord = require("discord.js");
const http = require("http");
const moment = require("moment");

const bot = new Discord.Client();
const { Util } = require("discord.js");
const fs = require("fs");
const firebase = require("firebase");

app.get("/", (request, response) => {
  response.sendStatus(200);
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(
    `Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`
  );
});
app.listen(process.env.PORT);

bot.Discord = Discord;
bot.util = Util;
bot.fs = fs;

bot.github = "https://github.com/luarrekcah/";
bot.webpage = "https://luarzito.glith.me/";
bot.inviteLink = "https://discordapp.com/oauth2/authorize?client_id=743841329334845530&scope=bot&permissions=2080697599";
bot.dev = ["701953428510736396"];
bot.prefixo = "lz.";

bot.emojis = {
  alerta: "<a:alerta:758339902386733098>"
};

var configF = {
  apiKey: process.env.FB_apiKey,
  authDomain: process.env.FB_authDomain,
  databaseURL: process.env.FB_databaseURL,
  projectId: process.env.FB_projectID,
  storageBucket: process.env.FB_storageBucket,
  messagingSenderId: process.env.FB_messagingSenderId,
  appId: process.env.FB_appId
};

firebase.initializeApp(configF);

const database = firebase.database();

bot.pastas = {};
bot.listas_comandos = {};
var logcrr = "Carreguei módulos: ";
var diretórios = ["comandos"];
var pasta, subpasta;
while (diretórios.length) {
  pasta = diretórios.shift();
  try {
    let nomes_arquivos = bot.fs.readdirSync("./" + pasta + "/");
    for (let nomea of nomes_arquivos) {
      if (!nomea.endsWith(".js")) {
        diretórios.unshift(pasta + "/" + nomea);
        continue;
      }
      try {
        let código = require("./" + pasta + "/" + nomea);
        nomea = nomea.split(".")[0];
        if (bot[nomea]) console.log("Existe 2 .js de mesmo nome: " + nomea);

        bot[nomea] = código.run;
        bot.pastas[nomea] = pasta;
        logcrr += nomea + ", ";

        if (pasta.includes("comandos/")) {
          subpasta = pasta.slice(9);
          if (!bot.listas_comandos[subpasta])
            bot.listas_comandos[subpasta] = [];

          bot.listas_comandos[subpasta].push(bot.prefixo + nomea + "\n");
        }
      } catch (erro) {
        console.log(
          "##Erro ao carregar " +
            nomea +
            ": " +
            erro.message +
            " - " +
            erro.name
        );
      }
    }
  } catch (erro) {
    console.log(
      "##Erro ao ler " + pasta + ": " + erro.message,
      " - ",
      erro.name
    );
  }
}
console.log(logcrr + "carregados.");

bot.nome_eventos = [];
var logcrr = "Carreguei eventos: ";
try {
  let arquivos_eventos = bot.fs.readdirSync("./eventos/");
  for (let nomee of arquivos_eventos) {
    if (!nomee.endsWith(".js")) continue;
    try {
      let código = require("./eventos/" + nomee);
      nomee = nomee.split(".")[0]; //remove .js
      bot.on(nomee, código.bind(null, bot));
      logcrr += nomee + ", ";
      bot.nome_eventos.push(nomee);
    } catch (erro) {
      console.log(
        "##Erro ao carregar o evento " +
          nomee +
          ": " +
          erro.message +
          " - " +
          erro.name
      );
    }
  }
} catch (erro) {
  console.log("##Erro ao ler eventos! " + erro.message + " - " + erro.name);
}
console.log(logcrr + "carregados.");

try {
  console.log("Tentando logar na api do dc");
  bot.login(process.env.TOKEN);
} catch (e) {
  console.log("Erro ao logar na api do dc: ", e);
}

const listener = app.listen(process.env.PORT, () => {
  console.log("Porta " + listener.address().port);
});
