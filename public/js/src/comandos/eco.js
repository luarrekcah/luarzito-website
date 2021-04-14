const comandos = [
  ["banco", "Veja seu saldo bancário."],
  ["pagar", "Está devendo alguém? Ou quer fazer uma doação? Use seu saldo!"],
  ["trabalhar", "Bom, só assim para conseguir dinheiro, não é?!"],

]

function comando(cmd, desc) {
  document.write(`<p><b>${cmd}</b> - ${desc}</p>`);
}

let i = 0;

for (i = 0; i < comandos.length; i++) {
  comando(comandos[i][0], comandos[i][1]);
}
