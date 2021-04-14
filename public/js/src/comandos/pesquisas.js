//Finalizado

const comandosPes = [
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

let iPes = 0;

for (iPes = 0; iPes < comandosPes.length; iPes++) {
  comando(comandosPes[iPes][0], comandosPes[iPes][1]);
}
