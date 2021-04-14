//Finalizado

const comandosEco = [
  ["banco", "Veja seu saldo bancário."],
  ["pagar", "Está devendo alguém? Ou quer fazer uma doação? Use seu saldo!"],
  ["trabalhar", "Bom, só assim para conseguir dinheiro, não é?!"],

]

function comando(cmd, desc) {
  document.write(`<p><b>${cmd}</b> - ${desc}</p>`);
}

let iEco = 0;

for (iEco = 0; iEco < comandosEco.length; iEco++) {
  comando(comandosEco[iEco][0], comandosEco[iEco][1]);
}
