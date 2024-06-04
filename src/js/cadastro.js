// cadastro de usuario
const form = document.querySelector("form");
const dialogIncorreto = document.querySelector(".dialog-incorreto");
const tipoErro = document.querySelector(".tipo-erro");
const btnCloseDialog = document.querySelector(".close-button");

dialogIncorreto.close();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nome = document.querySelector("#nome").value;
  const cpf = document.querySelector("#cpf").value;
  const dataNasc = document.querySelector("#data-nasc").value;
  const email = document.querySelector("#email").value;
  const senha = document.querySelector("#senha").value;
  const confirmacaoSenha = document.querySelector("#confirma-senha").value;

  if (confirmacaoSenha != senha) {
    tipoErro.innerText = "As senhas devem ser iguais!";
    dialogIncorreto.showModal();
    return;
  }
  const usuario = {
    nome: nome,
    cpf: cpf,
    dataNasc: dataNasc,
    email: email,
    senha: senha,
  };

  localStorage.setItem(email, JSON.stringify(usuario));
  localStorage.setItem("ultimoEmail", email);
  form.reset();
  window.open("./cartao.html?email=" + encodeURIComponent(email));
});

btnCloseDialog.addEventListener("click", () => {
  dialogIncorreto.close();
});
