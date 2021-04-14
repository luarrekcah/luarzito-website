//Finalizado

const comandosRp = [
  ["esfaquear", "Dê uma facada em alguém, ele terá um tempo para reagir!"],
  ["acordar", "Aaaa, acordaaaaa (-_- )"],
  ["bater", "Cê está merecendo uns tapas!"],
  ["cafune", "Ownn, dengo."],
  ["f", "F to pray respect."],
  ["handshake", "Aperto de mão, brow."],
  ["hug", "Abraçooo!"],
  ["kiss", "Beijinho :D"],
  ["piscar", "Piscadinha para você!"],
  ["poke", "Ok, me dê atenção!"],
  ["putsleep", "Já deu hora para dormir, rum!"],
  ["smile", "Sorrisinhoo!"],
  ["tchau ", "Até logo!"]
]

function comando(cmd, desc) {
  document.write(`<p><b>${cmd}</b> - ${desc}</p>`);
}

let iRp = 0;

for (iRp = 0; iRp < comandosRp.length; iRp++) {
  comando(comandosRp[iRp][0], comandosRp[iRp][1]);
}
