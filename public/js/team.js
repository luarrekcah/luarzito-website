function w(i) {
  document.write(i);
}
w(`<p style="color: white;">Manutenção</p>`);
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

var config = {
  firebaseConfig: {
    //apiKey: "",
    authDomain: "luarzito-bot-d38ff.firebaseapp.com",
    databaseURL: "https://luarzito-bot-d38ff.firebaseio.com",
    projectId: "luarzito-bot-d38ff",
    storageBucket: "luarzito-bot-d38ff.appspot.com",
    messagingSenderId: "598366956360",
    appId: "1:598366956360:web:d2e2177d1c5f9522e4e17d"
  },
  checkSystem: {
    time: 60000
  }
};

firebase.initializeApp(config.firebaseConfig);

if (!firebase.apps.length) {
  firebase.initializeApp(firebase);
}
const database = firebase.database();

database
  .ref(`Staff`)
  .once("value")
  .then(async function(db) {
    const p1 = {
      //P1 === Raul / Luar Rekcah
      avatar: db.val().p1.avatar,
      nome: db.val().p1.nome + "#" + db.val().p1.discriminador,
      cargo: "CEO | Desenvolvedor",
      redeSocialLink: "",
      redeSocialIcone: ""
    };
    const p2 = {
      //P2 === Bia
      avatar: db.val().p2.avatar,
      nome: db.val().p2.nome + "#" + db.val().p2.discriminador,
      cargo: "CPO",
      redeSocialLink: "",
      redeSocialIcone: ""
    };

    const p3 = {
      //P3 === Angel
      avatar: db.val().p3.avatar,
      nome: db.val().p3.nome + "#" + db.val().p3.discriminador,
      cargo: "COO",
      redeSocialLink: "",
      redeSocialIcone: ""
    };

    //Cards

    card(p1);
    card(p2);
    card(p3);
  });
