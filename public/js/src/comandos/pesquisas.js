const comandos = [
  ["book ", "Pesquise e ache Informações sobre livros."],
  ["", ""],
  ["", ""],

]

function comando(cmd, desc) {
  document.write(`<p><b>${cmd}</b> - ${desc}</p>`);
}

let i = 0;

for (i = 0; i < comandos.length; i++) {
  comando(comandos[i][0], comandos[i][1]);
}


/*
* COLOCAR NO PESQUISAS:
* -- mc
*/