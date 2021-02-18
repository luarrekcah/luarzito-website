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
  avatar: "",
  nome: "",
  cargo: "",
  redeSocialLink: "",
  redeSocialIcone: ""
};

//Cards

card(p1.avatar, p1.nome, p1.cargo, p1.redeSocialLink, p1.redeSocialIcone);
