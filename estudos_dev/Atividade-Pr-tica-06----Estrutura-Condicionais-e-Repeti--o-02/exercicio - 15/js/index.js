// Crie um algoritmo que armazene três valores, para cada um dos
// lados de um triângulo: A, B e C. Verifique se os lados fornecidos
// formam realmente um triângulo. Se formar, deve mostrar no console
// o tipo de triângulo: isósceles, escaleno ou equilátero.
// a. Para verificar se os lados fornecidos formam um triângulo: A <
// B + C e B < A + C e C < A + B.
// b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou
// B=C);
// c. Triângulo escaleno: possui todos os lados diferentes (A<>B e
// B<>C e A<>C);
// d. Triângulo equilátero: possui todos os lados iguais (A=B e
// B=C);

// armazenando os valores dos lados do triângulo
let ladoA = parseInt(prompt("Digite o valor do lado A:"));
let ladoB = parseInt(prompt("Digite o valor do lado B:"));
let ladoC = parseInt(prompt("Digite o valor do lado C:"));

// verificando se os valores fornecidos formam um triângulo
if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
  // verificando o tipo de triângulo
  if (ladoA === ladoB && ladoB === ladoC) {
    console.log("Triângulo equilátero");
  } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    console.log("Triângulo isósceles");
  } else {
    console.log("Triângulo escaleno");
  }
} else {
  console.log("Os valores fornecidos não formam um triângulo.");
}

