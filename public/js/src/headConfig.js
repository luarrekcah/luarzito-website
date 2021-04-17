const icone = {
  link:
    "https://cdn.glitch.com/3e9845c4-e236-46fa-831d-a4f8e76aa207%2FLuarzito-icone.jpg?v=1618495057872",
  type: "image/gif",
  sizes: "16x16"
};

const meta = {
  name: "viewport",
  content: "width=device-width, initial-scale=1",
  charset: "UTF-8"
};

const cardView = {
  propriedade: "og:image",
  iconeFoto:
    "https://cdn.discordapp.com/icons/742068003583295619/7485a625bb9e2711172a3d2b7028a8ca.png?size=1024",
  titulo: "Luarzito BOT",
  cor: "#114477",
  url: "https://luarzito.glitch.me/",
  descricao:
    "Página do Luarzito bot, veja meus comandos, resumo e servidor de suporte aqui!",
  keywords:
    "Luarzito, Luarzito Discord Bot, Luarzito bot, luarzito discord, discord bot, Discord Bot, Bot, Discord"
};

document.write(`

<!--Views ext ini-->
  <meta property="og:type" content="website">
  <meta property="og:url" content="${cardView.url}">
  <meta property="og:site_name" content="${cardView.titulo}">
  <meta property="og:keywords" content="${cardView.keywords}">
  <meta property="og:locale" content="pt-BR">
  <meta data-react-helmet="true" property="og:title" content="${cardView.titulo}">
  <meta data-react-helmet="true" property="og:description" content="${cardView.descricao}">
  <meta data-react-helmet="true" property="description" content="${cardView.descricao}">
  <meta data-react-helmet="true" property="og:image" content="${cardView.iconeFoto}">
  <meta name="theme-color" content="${cardView.cor}"/>
  <!--twt-->
  <meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@_luarrekcah">
<meta name="twitter:creator" content="@_luarrekcah">
<meta name="twitter:title" content="${cardView.titulo}">
<meta name="twitter:description" content="${cardView.descricao}">
<meta name="twitter:image" content="${cardView.iconeFoto}">
  <!--twt-->
<!--icon-->
<link
      rel="icon"
      href="${icone.link}"
      type="${icone.type}"
      sizes="${icone.sizes}"
    />
    <meta
      name="${meta.name}"
      content="${meta.content}"
      charset="${meta.charset}"
    />
    <!--iconFim-->
`);
