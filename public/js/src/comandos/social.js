const comandosSo = [
  ["casar", "Se case com sua alma gêmea!"],
  ["perfil", "Veja seu perfil!"],
  [
    "rep",
    "Dê pontos de reputação para alguém que lhe ajudou, ou fez algo legal."
  ],
  ["bio", `Atualize seu "sobre mim".`]
];

function comando(cmd, desc) {
  document.write(`<p><b>${cmd}</b> - ${desc}</p>`);
}
let iSo = 0;

for (iSo = 0; iSo < comandosSo.length; iSo++) {
  comando(comandosSo[iSo][0], comandosSo[iSo][1]);
}
