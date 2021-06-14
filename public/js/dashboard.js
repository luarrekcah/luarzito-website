//ELEMENTOS

const escolhas = document.getElementsByClassName("opts");
const avatar = document.getElementById("avatar");
const username = document.getElementById("username");
const ls = document.getElementById("lennes");
const reps = document.getElementById("reps");
const onLogin = document.getElementById("onLogin");
const aboutButton = document.getElementById("aboutButton");
const aboutInput = document.getElementById("aboutme");
const deletar = document.getElementById("delet");
const capa = document.getElementById("capa");
const reset = document.getElementById("resetar");
let link, perfil;

//---------------------------------------------------------------------

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

      //SETANDO VARIAVEIS UNDEFINED
      perfil = JSON.parse(req.responseText);
      link = `https://cdn.discordapp.com/avatars/${perfil.id}/${perfil.avatar}.png?size=1024`;
      
      //---------------------------------------------------------------------
     
      //LIBERADOR ONLOGIN
      let i;
      for (i = 0; i < escolhas.length; i++) {
        console.log(i);
        escolhas[i].style.cursor = "default";
      }
      //---------------------------------------------------------------------
      
      //ONLOGIN
      avatar.src = link;
      username.innerText = `Olá ${perfil.username}!`;
      document.getElementById("display_result").innerText = req.response;
      document.getElementById("me_add").style.display = "none";
      
      //---------------------------------------------------------------------
      
      let perfisDB = firebase.database().ref(`Perfis/${perfil.id}`);
      perfisDB.once("value", db => {  
        //VALORES INICIAIS
        ls.innerText = `Lennes: ${db.val().Reais}`;
        reps.innerText = `REPs: ${db.val().Reps}`;
        aboutInput.value = `${db.val().sobremim}`;
        onLogin.style.display = "block";
        capa.style.backgroundImage = "url(" + db.val().fundo_perfil + ")";
        //---------------------------------------------------------------------
        
        //BOTAO 1
        aboutButton.addEventListener("click", function() {
          if (aboutInput.value != db.val().sobremim) {
            perfisDB
              .update({
                sobremim: aboutInput.value
              })
              .then(alert("Sua bio foi atualizada."));
          } else {
            return;
          }
        });
        //---------------------------------------------------------------------
        
        //BOTAO 2
        deletar.addEventListener("click", function() {
          let confirmacao = confirm("Deseja apagar os dados?");
          if (confirmacao) {
            perfisDB
              .child(db.key)
              .remove()
              .catch(console.log);

            /*  location.reload();
        return false;*/
          }
        });
        
        //---------------------------------------------------------------------
        
        //BOTAO 3
        reset.addEventListener("click", function() {
          let confirmacao = confirm("Deseja resetar os dados?");
          if (confirmacao) {
          
          }
        });
        
        //---------------------------------------------------------------------
      });
    };
  }
};
