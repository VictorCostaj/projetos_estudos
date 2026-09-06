


// Obter a data atual
const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();

// Solicitar o nome e idade do usuário
const nome = prompt("Digite o seu nome:");
const idade = parseInt(prompt("Digite a sua idade:"));

// Calcular o ano de nascimento do usuário
const anoNascimento = anoAtual - idade;

// Imprimir as informações na tela
alert("Nome: " + nome + ", Idade: " + idade + " anos, nasceu em " + anoNascimento);
