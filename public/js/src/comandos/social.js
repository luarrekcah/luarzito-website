const comandosSo = [
  ["", ""],
  ["", ""],
  ["", ""],

]

function comando(cmd, desc) {
  document.write(`<p><b>${cmd}</b> - ${desc}</p>`);
}

let iSo = 0;

for (iSo = 0; iSo < comandosSo.length; iSo++) {
  comando(comandosSo[iSo][0], comandosSo[iSo][1]);
}
