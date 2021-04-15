const comandosOu = [
  ["catch", "Pegue mensagens deletadas. (quem sabe atualizadas também)"],
  ["anotar", "Faça anotações no pastbin."],
  ["carta", "Envie uma carta, uma última palavrinha à alguém..."],
  ["cartaconfig", "Escolha se quer ou não receber cartas."],
  ["embed", "Envie uma mensagem em embed."],
  ["emoji", "Faça-me usar um emoji."],
  ["ideia", "Faça um embed com sua ideia, com direito à votação."],
  ["invite", "Me chame ao seu servidor!"],
  ["invites", "Veja quantos convites tem um usuário."]
];

function comando(cmd, desc) {
  document.write(`<p><b>${cmd}</b> - ${desc}</p>`);
}

let iOu = 0;

for (iOu = 0; iOu < comandosOu.length; iOu++) {
  comando(comandosOu[iOu][0], comandosOu[iOu][1]);
}
