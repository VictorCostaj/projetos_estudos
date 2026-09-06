// 10. Tendo como entrada a altura e o sexo (codificado da seguinte
//     forma: 1 para sexo feminino e 2 para sexo masculino) de uma
//     pessoa, construa um programa que calcule e mostre seu peso ideal,
//     utilizando as seguintes fórmulas:
//     - para homens: (72.7 * Altura) – 58
//     - para mulheres: (62.1 * Altura) – 44.7


var altura = 1.65; // altura em metros
var sexo = 2; // 1 para feminino e 2 para masculino
var pesoIdeal;

if (sexo === 1) {
  pesoIdeal = (62.1 * altura) - 44.7;
} else if (sexo === 2) {
  pesoIdeal = (72.7 * altura) - 58;
} else {
  console.log("Sexo inválido");
}

if (pesoIdeal) {
  console.log("O peso ideal para a altura " + altura + " e sexo " + sexo + " é " + pesoIdeal.toFixed(2) + " kg");
}

