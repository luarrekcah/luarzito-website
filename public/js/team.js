 var firebaseConfig = {
   // apiKey: process.env.FB_apiKey,
    authDomain: "luarzito-bot-d38ff.firebaseapp.com",
    databaseURL: "https://luarzito-bot-d38ff.firebaseio.com",
    projectId: "luarzito-bot-d38ff",
    storageBucket: "luarzito-bot-d38ff.appspot.com",
    messagingSenderId: "598366956360",
    appId: "1:598366956360:web:d2e2177d1c5f9522e4e17d"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
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


database
    .ref(`Staff`)
    .once("value")
    .then(async function(db) {
  
const p1 = {
        //P1 === Raul / Luar Rekcah
        avatar:
          db.val().p1.avatar,
        nome: db.val().p1.nome + "#" + db.val().p1.discriminador,
        cargo: "CEO | Desenvolvedor",
        redeSocialLink: "",
        redeSocialIcone: ""
      };
      const p2 = {
        //P2 === Bia
        avatar: db.val().p2.nome + "#" + db.val().p2.discriminador
        nome: db.val().p2.nome + "#" + db.val().p2.discriminador,
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
      
});

  
  
  
  
  
  