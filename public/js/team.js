function w(i) {
  document.write(i);
}
function card(avatar, nome, cargo, redeSocialLink, redeSocialIcone) {
  w(`
  <div class="card">
      <div class="imgBx">
        <img src="${avatar}">
      </div>
      <div class="details">
        <div class="content">
          <h2>${nome}<br><span>${cargo}</span></h2>
          <ul>
            <li><a href="${redeSocialLink}">
              <img
                src="${redeSocialIcone}"
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

const p1 = { //P1 === Raul / Luar Rekcah
  avatar: "https://cdn.discordapp.com/avatars/701953428510736396/ec3f48a1870024894c42825d8eee0e97.png?size=1024",
  nome: "Raul ᵈᵃ ᵇⁱᵃʰ ♡⃤ 🦋⃤#5811",
  cargo: "CEO | Desenvolvedor",
  redeSocialLink: "",
  redeSocialIcone: ""
};
const p2 = { //P2 === Bia
  avatar: "https://cdn.discordapp.com/avatars/666382842338607134/717e3b944e95a8e20f03989e358a01c5.png?size=1024",
  nome: "Biah ᵈᵒ ʳᵃᵘˡ ♡⃤ 🦋⃤#1112",
  cargo: "CPO",
  redeSocialLink: "",
  redeSocialIcone: ""
};

const p3 = { //P3 === Angel
  avatar: "https://cdn.discordapp.com/avatars/740298343783202865/af5ed8f7b92b5ce487d05048953925b1.png?size=1024",
  nome: "Angel ツ#3912",
  cargo: "COO",
  redeSocialLink: "",
  redeSocialIcone: ""
};

//Cards

card(p1.avatar, p1.nome, p1.cargo, p1.redeSocialLink, p1.redeSocialIcone);

card(p2.avatar, p2.nome, p2.cargo, p2.redeSocialLink, p2.redeSocialIcone);

card(p3.avatar, p3.nome, p3.cargo, p3.redeSocialLink, p3.redeSocialIcone);
