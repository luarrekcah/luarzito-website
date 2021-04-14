//Finalizado

const comandosMG = [
  ["cf", "Clássico cara ou coroa."],
  ["jknpo", "Pedra, Papel e Tesoura!"],
  ["loteria", "Acerte o número valendo 10K de Lennes!"],
  ["pescar", "Parece pescaria do Minecraft..."],
  ["ppp", "Pega, pensa ou passa? Vou apagar o comando em breve ou refazer..."],
  ["rr", "Será que você tem sorte na... ROLETA RUSSA?!"]
];

function comando(cmd, desc) {
  document.write(`<p><b>${cmd}</b> - ${desc}</p>`);
}

let iMG = 0;

for (iMG = 0; iMG < comandosMG.length; iMG++) {
  comando(comandosMG[iMG][0], comandosMG[iMG][1]);
}
