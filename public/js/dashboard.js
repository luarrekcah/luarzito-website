import bot from "server.js";

window.onload = () => {
  const code = location.href.substring(
    location.href.indexOf("code") + 5,
    location.href.length
  );

  if (location.href.indexOf("code") > -1) {
    const req = new XMLHttpRequest();

    req.open("POST", "https://luarzito.glitch.me/dashboard");
    req.send(code);
    req.onload = () => {
      document.getElementById("display_result").innerText = req.response;
    };
    const dados = [];
    dados.push(req.response);
    console.log(req);
    console.log(typeof req.response);
    const ab = JSON.parse("`" + req.response + "`");
    const a = JSON.parse(req.response);

    console.log(a);
    console.log(ab);
  }
};
