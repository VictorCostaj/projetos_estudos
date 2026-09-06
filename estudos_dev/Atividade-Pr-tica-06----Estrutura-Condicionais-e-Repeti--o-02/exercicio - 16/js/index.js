// 16. Escreva um algoritmo que armazene o ano atual e o ano de
// nascimento de uma pessoa. Escrever uma mensagem no console
// que diga se ela poderá ou não votar este ano (não é necessário
// considerar o mês em que a pessoa nasceu).

// armazena o ano atual
const anoAtual = new Date().getUTCFullYear();

// armazena o ano de nascimento da pessoa (exemplo: 1990)
const anoNascimento = 1990;

// calcula a idade da pessoa
const idade = anoAtual - anoNascimento;

// verifica se a pessoa pode votar
if (idade >= 18) {
  console.log("Você pode votar este ano!");
} else {
  console.log("Você não pode votar este ano!");
}


