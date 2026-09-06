// Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
// número de 1 a 7 e imprimir no console o dia da Semana. Para este
// exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
// por diante. Caso o número recebido não esteja neste intervalo
// imprimir “Dia não reconhecido”.

// Lê um número de 1 a 7
var numDia = parseInt(prompt("Digite um número de 1 a 7:"));

// Verifica o número e imprime o dia da semana correspondente
if (numDia === 1) {
  console.log("Domingo");
} else if (numDia === 2) {
  console.log("Segunda-feira");
} else if (numDia === 3) {
  console.log("Terça-feira");
} else if (numDia === 4) {
  console.log("Quarta-feira");
} else if (numDia === 5) {
  console.log("Quinta-feira");
} else if (numDia === 6) {
  console.log("Sexta-feira");
} else if (numDia === 7) {
  console.log("Sábado");
} else {
  console.log("Dia não reconhecido");
}

