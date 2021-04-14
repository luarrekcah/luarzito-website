const comandos = [
  ["ascii", "Palavra em ascii!"],
  ["avatar", "Quer ver o avatar de algum usuário?"],
  ["bff", "Vulgo, Best Friends Forever, veja seu nível de amizade com alguém!"],
  ["conquista", "Conquista do Minecraft customizável, da sua forma hehe."],
  ["couple", "Quer ver seu couple com alguém, lado à lado?"],
  ["m", "Sem ideia de músicas para ouvir? Te recomendo umas..."],
  ["", ""],
  ["", ""],
  ["", ""],
  ["", ""],
  ["", ""],
  ["", ""],
  ["", ""],
  ["", ""]

]

function comando(cmd, desc) {
  document.write(`<p><b>${cmd}</b> - ${desc}</p>`);
}

let i = 0;

for (i = 0; i < comandos.length; i++) {
  comando(comandos[i][0], comandos[i][1]);
}
