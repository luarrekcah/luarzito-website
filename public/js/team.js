//const firebase = require("firebase");
//const database = firebase.database();
module.exports.run = async (Discord) => {
  
}
function w(i) {
  document.write(i);
}

function card(id) {
  w(`
  <div class="card">
      <div class="imgBx">
        <img id="imggg" src="${id.avatar}">
      </div>
      <div class="details">
        <div class="content">
          <h2>${id.nome}<br><span>${id.cargo}</span></h2>
          <ul>
            <li><a href="${id.redeSocialLink}">
              <img
                src="${id.redeSocialIcone}"
                width="25"
                weight="25"
              />
              </a></li>
            
          </ul>
          
        </div>
      </div>
    </div>
    `);
}
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
      //req.response
    };
    console.log(req);
  }
};

/*
if (!firebase.apps.length) {
  firebase.initializeApp(firebase);
}

let dbref = database.ref(`Staff/`);
  
dbref
    .once("value")
    .then(async function(db) {
  
  if (db.val() == null) {
      return w("Parece que não temos staffs no momento... Além do CEO, é claro.")
  } else {
    
  }
})
*/
export const p1 = {
  //P1 === Raul / Luar Rekcah
  avatar:
    "https://cdn.discordapp.com/avatars/701953428510736396/ec3f48a1870024894c42825d8eee0e97.png?size=1024",
  nome: "Raul ᵈᵃ ᵇⁱᵃʰ ♡⃤ 🦋⃤#5811",
  cargo: "CEO | Desenvolvedor",
  redeSocialLink: "",
  redeSocialIcone: ""
};
const p2 = {
  //P2 === Bia
  avatar:
    "https://cdn.discordapp.com/avatars/666382842338607134/717e3b944e95a8e20f03989e358a01c5.png?size=1024",
  nome: "Biah ᵈᵒ ʳᵃᵘˡ ♡⃤ 🦋⃤#1112",
  cargo: "CPO",
  redeSocialLink: "",
  redeSocialIcone: ""
};

const p3 = {
  //P3 === Angel
  avatar:
    "https://cdn.discordapp.com/avatars/740298343783202865/68d0d5d5882413f1ee012d01dece6e9f.png?size=1024",
  nome: "Angel ツ#3912",
  cargo: "COO",
  redeSocialLink: "",
  redeSocialIcone: ""
};

//Cards

card(p1);
card(p2);
card(p3);
