var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const fetch = require("node-fetch");
const FormData = require("form-data");

const axios = require("axios");
const process = require("process");
app.use(bodyParser.text());

app.use(express.static("public"));
//app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
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


app.get("/dashboard", (request, response) => {
  response.sendFile(__dirname + "/views/dashboard.html");
});
app.post("/dashboard", (req, res) => {
  const data = new FormData();
  console.log(req.body);
  data.append("client_id", "743841329334845530");
  data.append("client_secret", "k7gj1sbpgm_IAV9TIxU82poDKUqifyDo");
  data.append("grant_type", "authorization_code");
  data.append("redirect_uri", "https://luarzito.glitch.me/dashboard");
  data.append("scope", "identify");
  data.append("code", req.body);

  fetch("https://discordapp.com/api/oauth2/token", {
    method: "POST",
    body: data
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const config = {
        headers: {
          authorization: `Bearer ${data.access_token}`
        }
      };
      axios
        .get("https://discordapp.com/api/users/@me", config)
        .then(response => {
          console.log(response.data.username);
          res.send(response.data.username);
        res.send(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
      axios
        .get("https://discordapp.com/api/users/@me/guilds", config)
        .then(response => {
          // console.log(response.data.username);
          // res.send(response.data.username);
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    });
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
const prefixo = "dg.";

/*
var configF = {
  apiKey: process.env.FB_apiKey,
  authDomain: process.env.FB_authDomain,
  databaseURL: process.env.FB_databaseURL,
  projectId: process.env.FB_projectID,
  storageBucket: process.env.FB_storageBucket,
  messagingSenderId: process.env.FB_messagingSenderId,
  appId: process.env.FB_appId
};


const database = firebase.database();

firebase.initializeApp(configF);
*/
bot.on("ready", () => {
  console.log("Bot preparado.\nLogado como: " + bot.user.username);
});

bot.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (!message.content.startsWith(process.env.prefixo)) {
    //coloca aq
    if (message.mentions.has(bot.user.id)) {
      if (
        message.content.includes("@here") ||
        message.content.includes("@everyone")
      )
        return;
      if(message.content.length !== 21 && message.content.length !== 22) return;
      message.channel.send(
        "Olá <@" +
          message.author +
          ">! Me chamo Data Gran e o meu prefixo é `dg.`"
      );
    } else {
      return;
    }
  }
  if (
    message.content.startsWith(`<@!${bot.user.id}`) ||
    message.content.startsWith(`<@${bot.user.id}`)
  )
    return;

  let args = message.content.split(" ").slice(1);
  let command = message.content.split(" ")[0];
  command = command.slice(process.env.prefixo.length);

  try {
    let commandFile = require(`./comandos/${command}.js`);
    return commandFile.run(bot, message, args);
  } catch (err) {
    console.log("erro: " + err);
  }
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
