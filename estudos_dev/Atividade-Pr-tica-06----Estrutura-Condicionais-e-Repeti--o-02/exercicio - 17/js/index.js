// Escreva um algoritmo que armazene o número total de eleitores de
// um município, o número de votos brancos, nulos e válidos. Calcular
// e escrever o percentual que cada um representa em relação ao
// total de eleitores. O algoritmo deve fazer uma validação para que as
// porcentagens dos votos armazenados (brancos, nulos e válidos)
// respeitem o limite do número total de eleitores, ou seja, garantir que
// a soma dos votos brancos, nulos e válidos não seja maior que o
// número total de eleitores.

// Armazena o número total de eleitores do município
let totalEleitores = parseInt(prompt("Informe o número total de eleitores:"));

// Armazena o número de votos brancos
let votosBrancos = parseInt(prompt("Informe o número de votos brancos:"));

// Armazena o número de votos nulos
let votosNulos = parseInt(prompt("Informe o número de votos nulos:"));

// Armazena o número de votos válidos
let votosValidos = parseInt(prompt("Informe o número de votos válidos:"));

// Verifica se a soma dos votos brancos, nulos e válidos é maior que o número total de eleitores
if (votosBrancos + votosNulos + votosValidos > totalEleitores) {
  document.write("Erro! A soma dos votos brancos, nulos e válidos é maior que o número total de eleitores.");
} else {
  // Calcula o percentual de votos brancos
  let percentualVotosBrancos = (votosBrancos / totalEleitores) * 100;

  // Calcula o percentual de votos nulos
  let percentualVotosNulos = (votosNulos / totalEleitores) * 100;

  // Calcula o percentual de votos válidos
  let percentualVotosValidos = (votosValidos / totalEleitores) * 100;

  // Imprime os percentuais de votos
  document.write(`Percentual de votos brancos: ${percentualVotosBrancos.toFixed(2)}% <br>`);
  document.write(`Percentual de votos nulos: ${percentualVotosNulos.toFixed(2)}% <br>`);
  document.write(`Percentual de votos válidos: ${percentualVotosValidos.toFixed(2)}% <br>`);
}

