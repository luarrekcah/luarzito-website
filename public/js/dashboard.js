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
      console.log(req);
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
      //document.getElementById("display_result").innerText = req.response;
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
            perfisDB
              .set({
                Reps: 0,
                Reps_autores: [],
                Reps_razoes: [],
                Reais: 0,
                fundo_perfil:
                  "https://cdn.discordapp.com/attachments/742068003583295623/792531715863609354/Bgnzinho_Img027.png",
                casadocom_tempo: 0,
                casadocom: 0,
                sobremim: ""
              })
              .then(() => {
                location.reload();
                return false;
              });
          }
        });

        //---------------------------------------------------------------------

        //BOTAO 4
        capa.addEventListener("click", function() {
          let link = prompt("Cole o link da sua nova imagem de perfil:");
          if (!link.startsWith("http"))
            return alert("Desculpe, mas isto não é um link válido. :c");
          perfisDB
            .update({
              fundo_perfil: link
            })
            .then(() => {
              alert("Sua foto foi atualizada.");
              capa.style.backgroundImage = "url(" + link + ")";
            })
            .catch(erro => {
              alert(erro);
            });
        });

        //---------------------------------------------------------------------
      });
    };
  }
};
