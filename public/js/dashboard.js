let escolhas = document.getElementsByClassName("opts");
let avatar = document.getElementById("avatar");
let username = document.getElementById("username");
let ls = document.getElementById("lennes");
let reps = document.getElementById("reps");
let onLogin = document.getElementById("onLogin");
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
      console.log(req)
      perfil = JSON.parse(req.responseText);
      link = `https://cdn.discordapp.com/avatars/${perfil.id}/${perfil.avatar}.png?size=1024`;
      let i;
      for (i = 0; i < escolhas.length; i++) {
        console.log(i);
        escolhas[i].style.cursor = "default";
      }
      avatar.src = link;
     // ls.innerText = `L$000`
      username.innerText = `Olá ${perfil.username}!`;
      document.getElementById("display_result").innerText = req.response;
      document.getElementById("me_add").style.display = "none";
      let perfisDB = firebase.database().ref(`Perfis/${perfil.id}`);
      perfisDB.once("value", db => {
        ls.innerText = `Lennes: ${db.val().Reais}`
        reps.innerText = `REPs: ${db.val().Reps}`
       onLogin.style.display = "block";
        deletar.addEventListener("click", function() {
      let confirmacao = confirm(
        "Deseja apagar os dados?"
      );
      if (confirmacao) {
        perfisDB.child(db.key).remove();
      /*  location.reload();
        return false;*/
      }
    });
      });
    };
  }
};
