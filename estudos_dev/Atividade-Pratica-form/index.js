const formElement = document.getElementById("cadastro");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();

  // Capturando os valores dos campos do formulário . // Exibindo os dados preenchidos no console.log.

  const name = document.getElementById("nome").value;
  console.log("Nome:", name);
  const adress = document.getElementById("endereco").value;
  console.log("Endereço:", adress);
  const city = document.getElementById("cidade").value;
  console.log("Cidade:", city);

  const state = document.getElementById("estado").value;
  console.log("Estado:", state);
});
