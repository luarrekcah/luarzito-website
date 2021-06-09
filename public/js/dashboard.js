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
      var perfil = JSON.parse(req.responseText);
      const link = `https://cdn.discordapp.com/avatars/${perfil.id}/${perfil.avatar}.png?size=1024`;
      document.getElementById("perfil-foto").src = link;
      document.getElementById("perfil-nome").innerHTML = perfil.username + "#" + perfil.discriminator; 
      document.getElementById("login-btn").style.display = "none";
      document.getElementById("login").style.display = "none";
      document.getElementById("header-login").style.display = "block";
      console.log(perfil);
      document.getElementById("display_result").innerText = req.response;
    };
  }
};
