const escolhas = document.getElementsByClassName("opts");
const avatar = document.getElementById("avatar");
const username = document.getElementById("username");
const ls = document.getElementById("lennes");
const reps = document.getElementById("reps");
const onLogin = document.getElementById("onLogin");
const aboutButton = document.getElementById("aboutButton");
const aboutInput = document.getElementById("aboutme");
const deletar = document.getElementById("delet");
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
        aboutInput.value = `${db.val().sobremim}`
       onLogin.style.display = "block";
        aboutButton.addEventListener("click", function() {
          
          if(aboutInput.value != db.val().sobremim) {
            perfisDB.update({
              sobremim: aboutInput.value
            })
          } else {
            return;
          }
        })
        deletar.addEventListener("click", function() {
      let confirmacao = confirm(
        "Deseja apagar os dados?"
      );
      if (confirmacao) {
        perfisDB.child(perfil.id).remove();
      /*  location.reload();
        return false;*/
      }
    });
      });
    };
  }
};
