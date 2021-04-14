const comandosOu = [
  ["", ""],
  ["", ""],
  ["", ""],

]

function comando(cmd, desc) {
  document.write(`<p><b>${cmd}</b> - ${desc}</p>`);
}

let iOu = 0;

for (iOu = 0; iOu < comandosOu.length; iOu++) {
  comando(comandosOu[iOu][0], comandosOu[iOu][1]);
}
