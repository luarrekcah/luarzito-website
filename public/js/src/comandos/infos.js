const comandos = [
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

let i = 0;

for (i = 0; i < comandos.length; i++) {
  comando(comandos[i][0], comandos[i][1]);
}
