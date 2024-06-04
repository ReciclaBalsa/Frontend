window.onload = function () {
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  const email = getQueryParam("email");

  if (email) {
    const usuarioData = localStorage.getItem(email);

    if (usuarioData) {
      const usuario = JSON.parse(usuarioData);

      document.querySelector(".nome").textContent = usuario.nome;
      document.querySelector(".nome-cartao").textContent = usuario.nome;
      document.querySelector(".cpf").textContent = usuario.cpf;
      document.querySelector(".cpf-cartao").textContent = usuario.cpf;
      document.querySelector(".data-nasc").textContent = usuario.dataNasc;
      document.querySelector(".email").textContent = usuario.email;
    }
  }
};
