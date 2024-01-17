function verificarSenha() {
    var senhaInput = document.getElementById("senha");
    var mensagemErro = document.getElementById("mensagemErro");

    if (senhaInput.value === "123456") {
      window.location.href = "index.html";
    } else {
      mensagemErro.style.display = "inline";
    }
  }


