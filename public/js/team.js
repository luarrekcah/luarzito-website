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
