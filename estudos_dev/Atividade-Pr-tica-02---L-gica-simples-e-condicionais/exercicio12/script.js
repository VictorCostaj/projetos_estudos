// Escreva um algoritmo que armazene o ano atual e o ano de
// nascimento de uma pessoa. Escrever uma mensagem no console
// que diga se ela poderá ou não votar este ano (não é necessário
// considerar o mês em que a pessoa nasceu).


const anoAtual = new Date().getFullYear();
const anoNascimento = Number(prompt("Digite o ano de nascimento:"));

// Calculando a idade da pessoa
const idade = anoAtual - anoNascimento;

// Verificando se a pessoa pode votar este ano
if (idade >= 16) {
 alert("Você pode votar este ano!");
} else {
  alert("Você não pode votar este ano!");
}
