// Desenvolva um algoritmo que faça o cálculo do índice de massa
// corporal de uma pessoa. Esse algoritmo deve solicitar ao usuário
// que digite sua altura, em seguida solicitar que digite seu peso e que
// lhe exiba o status. O status vai variar da seguinte forma:
// a. Se o IMC for menor que 18,5 o status a ser mostrado deve ser
// “Você está abaixo da faixa de peso ideal”;
// b. Se o IMC estiver acima de 24,99 o status a ser mostrado será
// “Você está acima da faixa de peso ideal”;

// c. Se o IMC for igual ou maior que 18,5 e igual ou menor que
// 24,99, o status a ser mostrado será “Você está dentro da faixa
// de peso ideal”.


// Solicita a altura da pessoa
const altura = parseFloat(prompt("Digite sua altura em metros (exemplo: 1.75):"));

// Solicita o peso da pessoa
const peso = parseFloat(prompt("Digite seu peso em quilogramas (exemplo: 68):"));

// Calcula o IMC
const imc = peso / (altura * altura);

// Exibe o IMC e o status correspondente
if (imc < 18.5) {
  alert("Seu IMC é " + imc.toFixed(2) + ". Você está abaixo da faixa de peso ideal.");
} else if (imc >= 18.5 && imc <= 24.99) {
  alert("Seu IMC é " + imc.toFixed(2) + ". Você está dentro da faixa de peso ideal.");
} else {
  alert("Seu IMC é " + imc.toFixed(2) + ". Você está acima da faixa de peso ideal.");
}
