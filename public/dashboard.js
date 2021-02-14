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
  const data = new FormData();
  console.log(req.body);
data.append("client_id", "743841329334845530");
  data.append("client_secret", "k7gj1sbpgm_IAV9TIxU82poDKUqifyDo");
  data.append("grant_type", "authorization_code");
  data.append(
    "redirect_uri",
    "http://localhost:8081"
  );
  data.append("scope", "identify");
  data.append("code", req.body);

  fetch("https://discordapp.com/api/oauth2/token", {
    method: "POST",
    body: data,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const config = {
        headers: {
          authorization: `Bearer ${data.access_token}`,
        },
      };
      axios
        .get("https://discordapp.com/api/users/@me", config)
        .then((response) => {
          console.log(response.data.username);
          res.send(response.data.username);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
        axios
        .get("https://discordapp.com/api/users/@me/guilds", config)
        .then((response) => {
         // console.log(response.data.username);
         // res.send(response.data.username);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    });
    
});
app.listen(process.env.PORT);
