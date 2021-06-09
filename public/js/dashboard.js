
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
      
    var perfil = JSON.parse(req.responseText);
    document.getElementById("login-btn").style.display = "none";
      document.getElementeById("login").style.display = "none"
    console.log(perfil);
      document.getElementById("display_result").innerText = req.response;
    };
  
  }
};
