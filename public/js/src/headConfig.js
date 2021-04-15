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

document.write(`
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
`);
