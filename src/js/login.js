const formLogin = document.querySelector("form");
const errorDialog = document.querySelector(".alert-dialog");
const tipoErro = document.querySelector(".tipo-erro");
const btnCloseDialog = document.querySelector(".close-button");

errorDialog.close();

formLogin.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.querySelector("#email").value;
  const senha = document.querySelector("#senha").value;

  const getUsuario = localStorage.getItem(email);
  const usuario = JSON.parse(getUsuario);

  if (!getUsuario) {
    tipoErro.innerText = "Email inválido!";
    errorDialog.showModal();
    return;
  }
  if (senha != usuario.senha) {
    tipoErro.innerText = "Senha incorreta!";
    errorDialog.showModal();
    return;
  }

  window.open(`./cartao.html?email=${encodeURIComponent(email)}`);
});

btnCloseDialog.addEventListener("click", () => {
  errorDialog.close();
});
