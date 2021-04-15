function w(i) {
  document.write(i);
}

function card(id) {
  w(`
  <div class="card">
      <div class="imgBx">
        <img src="${id.avatar}">
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

    req.open("POST", "https://luarzito.glitch.me/team");
    req.send(code);
    req.onload = () => {
      
      
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

const p1 = {
        //P1 === Raul / Luar Rekcah
        avatar:
          "https://cdn.discordapp.com/avatars/701953428510736396/8f7c67027d267a293c4a8d74a69f00e4.png?size=2048",
        nome: "Raul ᵈᵃ ᵇⁱᵃʰ ♡⃤ 🦋⃤#5811",
        cargo: "CEO | Desenvolvedor",
        redeSocialLink: "",
        redeSocialIcone: ""
      };
      const p2 = {
        //P2 === Bia
        avatar: `https://cdn.discordapp.com/avatars/666382842338607134/d82c0c8e2de1449a0653e33cd3a620f2.png?size=2048`,
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
      