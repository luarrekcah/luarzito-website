 var firebaseConfig = {
    apiKey: process.env.FB_apiKey,
    authDomain: process.env.FB_authDomain,
    databaseURL: process.env.FB_databaseURL,
    projectId: process.env.FB_projectID,
    storageBucket: process.env.FB_storageBucket,
    messagingSenderId: process.env.FB_messagingSenderId,
    appId: process.env.FB_appId
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
          ,
        nome: "",
        cargo: "CEO | Desenvolvedor",
        redeSocialLink: "",
        redeSocialIcone: ""
      };
      const p2 = {
        //P2 === Bia
        avatar: `https://cdn.discordapp.com/avatars/666382842338607134/d82c0c8e2de1449a0653e33cd3a620f2.png?size=2048`,
        nome: "",
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

});

  
  
  
  
  
  
  
  
      //Cards

      card(p1);
      card(p2);
      card(p3);
      