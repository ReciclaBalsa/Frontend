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
      function formatDate(dateStr) {
        const date = new Date(dateStr);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
      }

      document.querySelector(".nome").textContent = usuario.nome;
      document.querySelector(".nome-cartao").textContent = usuario.nome;
      document.querySelector(".cpf").textContent = usuario.cpf;
      document.querySelector(".cpf-cartao").textContent = usuario.cpf;
      document.querySelector(".data-nasc").textContent = formatDate(
        usuario.dataNasc
      );
      document.querySelector(".email").textContent = usuario.email;
    }
  }
};
