// Escreva um algoritmo que solicite 2 números e uma operação
// matemática. O algoritmo deve realizar o cálculo com os 2 números
// digitados conforme a operação informada.

// Solicita os dois números e a operação matemática ao usuário
let numero1 = parseFloat(prompt("Digite o primeiro número: "));
let numero2 = parseFloat(prompt("Digite o segundo número: "));
let operacao = prompt("Digite a operação desejada (+, -, *, /): ");

// Realiza o cálculo conforme a operação informada
let resultado;
switch (operacao) {
  case "+":
    resultado = numero1 + numero2;
    break;
  case "-":
    resultado = numero1 - numero2;
    break;
  case "*":
    resultado = numero1 * numero2;
    break;
  case "/":
    resultado = numero1 / numero2;
    break;
  default:
    resultado = "Operação inválida!";
}

// Exibe o resultado na tela
console.log("Resultado: " + resultado);
