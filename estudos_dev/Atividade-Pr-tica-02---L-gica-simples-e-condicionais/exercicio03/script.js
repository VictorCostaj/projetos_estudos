// Crie um programa que peça um número e verifique se ele é positivo,
// negativo ou zero.

const num = Number(prompt("Digite um número: "));

if (num > 0) {
  console.log(num + " é positivo");
} else if (num < 0) {
  console.log(num + " é negativo");
} else {
  console.log("O número é zero");
}
