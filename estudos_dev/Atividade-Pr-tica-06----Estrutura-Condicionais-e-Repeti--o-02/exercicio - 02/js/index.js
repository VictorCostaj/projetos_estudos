// Para o mesmo exercício acima insira mais uma variável a
// condicional, além de saber se o motorista tem 18 anos ou mais,
// temos que saber também se ele é habilitado para dirigir. Caso ele
// tenha idade maior ou igual a 18 anos e possua habilitação, insira no
// html “Pode dirigir” caso contrário imprima “Não pode dirigir”.


// Lê a idade do motorista e se ele é habilitado
var idade = prompt("Qual é a sua idade?");
var habilitado = confirm("Você possui habilitação para dirigir?");

// Verifica se a idade é maior ou igual a 18 anos e se o motorista é habilitado
if (idade >= 18 && habilitado) {
  document.write("Pode dirigir");
} else {
  document.write("Não pode dirigir");
}
