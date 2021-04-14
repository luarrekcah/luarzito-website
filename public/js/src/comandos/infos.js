//Finalizado

const comandosInfo = [
  ["ajuda", "Para me adicionar, ver meu servidor, um resumo e meu site!"],
  ["botinfo", "Minhas Informações, bem útil!"],
  ["emojiinfo", "Veja as Informações de um emoji."],
  ["info", "Quantidade de servidores, canais e usuários que tenho!"],
  ["ping", "Todas as minhas Informações técnicas."],
  ["mineserver", "Informações sobre servidores de Minecraft!"],
  ["servericon", "Veja o ícone do servidor atual."],
  ["serverinfo", "Informações sobre o servidor atual."],
  ["userinfo", "Veja as Informações de um usuário."]
];

function comando(cmd, desc) {
  document.write(`<p><b>${cmd}</b> - ${desc}</p>`);
}

let iInfo = 0;

for (iInfo = 0; iInfo < comandosInfo.length; iInfo++) {
  comando(comandosInfo[iInfo][0], comandosInfo[iInfo][1]);
}


