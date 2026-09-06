// Crie um cadastro de pessoas onde o usuário informe o nome, idade
// e se está trabalhando ou não, se a pessoa estiver trabalhando

// pergunte para ele o salário que está ganhando. Para cada pessoa
// cadastrada, pergunte ao usuário se ele deseja continuar
// cadastrando ou não. No final, mostre as pessoas que estão
// desempregadas, as pessoas que estão empregadas separadas
// pelas que ganham mais que 2500 e menos que 2500.

// Exemplo de resultado:
// Pessoas desempregadas:
// Nome: Alessandro, Idade: 28
// Nome: Alessandro, Idade: 28

// Pessoas empregadas com salários menores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 1500
// Nome: Alessandro, Idade: 28, Salário: 2400

// Pessoas empregadas com salários maiores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 2700
// Nome: Alessandro, Idade: 28, Salário: 3000


const pessoas = [];
let continuarCadastro = true;

while (continuarCadastro) {
  const pessoa = {};
  
  pessoa.nome = prompt("Digite o nome da pessoa:");
  pessoa.idade = Number(prompt("Digite a idade da pessoa:"));

  const estaTrabalhando = prompt("A pessoa está trabalhando? (S/N)").toUpperCase() === "S";

  if (estaTrabalhando) {
    pessoa.salario = Number(prompt("Digite o salário da pessoa:"));
  }

  pessoa.estaTrabalhando = estaTrabalhando;

  pessoas.push(pessoa);

  continuarCadastro = prompt("Deseja continuar cadastrando? (S/N)").toUpperCase() === "S";
}

const desempregadas = [];
const empregadasMenos2500 = [];
const empregadasMais2500 = [];

for (const pessoa of pessoas) {
  if (!pessoa.estaTrabalhando) {
    desempregadas.push(pessoa);
  } else if (pessoa.salario < 2500) {
    empregadasMenos2500.push(pessoa);
  } else {
    empregadasMais2500.push(pessoa);
  }
}

console.log("Pessoas desempregadas:");
for (const pessoa of desempregadas) {
  console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
}

console.log("\nPessoas empregadas com salários menores que 2500:");
for (const pessoa of empregadasMenos2500) {
  console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}`);
}

console.log("\nPessoas empregadas com salários maiores que 2500:");
for (const pessoa of empregadasMais2500) {
  console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}`);
}
