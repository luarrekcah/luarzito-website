window.onload = () => {
  const code = location.href.substring(
    location.href.indexOf("code") + 5,
    location.href.length
  );

  if (location.href.indexOf("code") > -1) {
    const req = new XMLHttpRequest();

    req.open("POST", "https://luarzito.glitch.me/dashboard");
    req.send(code);
    req.onload = () => {
      document.getElementById("display_result").innerText = req.response;
    };
    const dados = []
    console.log(req);
    console.log(req.response.nick)
    const json = `{"nick":"Sol ⛭","avatar":"a_f1757d00ddda80f92ae7ef357ab550cb"}`
    console.log(JSON.parse(json));
    console.log(typeof(req.response))
    const a = JSON.parse(req.response);
    console.log(a)
  }
};
