//Finalizado

const comandos = [
  ["book ", "Pesquise e ache Informações sobre livros."],
  ["clima", "Veja o clima da sua cidade."],
  ["image", "Pesquise imagens, isso é muito útil."],
  ["ipget", "Puxe dados de um IP pelo Discord!"],
  ["ly", "Pesquise as letras de uma música!"],
  ["wiki", "Faça pesquisas no Wikipedia."],
  ["yt", "Pesquise vídeos no YouTube."],
  ["cursed", "Bizarro..."],
  ["mc", "Informações sobre os usuários de Minecraft e derivados!"]
];

function comando(cmd, desc) {
  document.write(`<p><b>${cmd}</b> - ${desc}</p>`);
}

let i = 0;

for (i = 0; i < comandos.length; i++) {
  comando(comandos[i][0], comandos[i][1]);
}
