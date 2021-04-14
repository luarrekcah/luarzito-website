//Finalizado

const comandos = [
  ["addemoji", "Adicione emoji apartir de um link!"],
  ["ban", "Bana um usuário indesejado."],
  ["ch", "Ferramentas para gestão do canal."],
  ["clear", "Limpe as mensagens do chat, escolha de 1 à 99 ou 200!"],
  ["kick", "Chute um usuário, ele ainda poderá retornar..."],
  ["listban", "Receba a lista de bans na DM."],
  ["mute", "Em breve..."],
  ["say", "O que acha de me fazer falar umas coisas? Tente!"],
  ["sv", "Ferramentas para gestão do servidor."],
  ["unban", "Dê uma segunda chance à aquele renegado... Desbana pelo ID."]
]

function comando(cmd, desc) {
  document.write(`<p><b>${cmd}</b> - ${desc}</p>`);
}

let i = 0;

for (i = 0; i < comandos.length; i++) {
  comando(comandos[i][0], comandos[i][1]);
}
