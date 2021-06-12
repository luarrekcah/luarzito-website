let escolhas = document.getElementsByClassName("opts");
let avatar = document.getElementById("avatar");
let username = document.getElementById("username");
let link, perfil;

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
      perfil = JSON.parse(req.responseText);
      link = `https://cdn.discordapp.com/avatars/${perfil.id}/${perfil.avatar}.png?size=1024`;
      let i;
      for (i = 0; i < escolhas.length; i++) {
        console.log(i);
        escolhas[i].style.cursor = "default";
      }
      avatar.src = link;
      username.innerText = `Olá ${perfil.username}!`;
      document.getElementById("display_result").innerText = req.response;
      document.getElementById("me_add").style.display = "none";
    };
  }
};
