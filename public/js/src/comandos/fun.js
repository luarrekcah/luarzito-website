const comandos = [
  ["ascii", "Palavra em ascii!"],
  ["avatar", "Quer ver o avatar de algum usuário?"],
  ["bff", "Vulgo, Best Friends Forever, veja seu nível de amizade com alguém!"],
  ["conquista", "Conquista do Minecraft customizável, da sua forma hehe."],
  ["couple", "Quer ver seu couple com alguém, lado à lado?"],
  ["m", "Sem ideia de músicas para ouvir? Te recomendo umas..."],
  ["meme", "Acho que só tem meme gringo aí..."],
  ["nickgen", "Gerador de nickname, eba!"],
  ["nofap", "Ok, por que o bot ainda tem isso? Bom, veja seu nível no nofapKKKK."],
  ["ship", "Clássico. Shipe duas pessoas, hehe."],
  ["tableflip", "AAAHHHH!"],
  ["vdd", `Verdade e desafio, use "vdd 18" para perguntas mais legalzinhas, hehe.`]
]

function comando(cmd, desc) {
  document.write(`<p><b>${cmd}</b> - ${desc}</p>`);
}

let i = 0;

for (i = 0; i < comandos.length; i++) {
  comando(comandos[i][0], comandos[i][1]);
}

