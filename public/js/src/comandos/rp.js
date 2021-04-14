const comandosRp = [
  ["", ""],
  ["", ""],
  ["", ""],

]

function comando(cmd, desc) {
  document.write(`<p><b>${cmd}</b> - ${desc}</p>`);
}

let iRp = 0;

for (iRp = 0; iRp < comandosRp.length; iRp++) {
  comando(comandosRp[iRp][0], comandosRp[iRp][1]);
}
