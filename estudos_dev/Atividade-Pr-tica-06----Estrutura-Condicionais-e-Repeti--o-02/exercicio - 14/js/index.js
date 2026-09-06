// Leia um número, utilizando WHILE multiplique este número por 3
// enquanto a soma seja menor que 500 e no final mostre qual o
// último valor

let num = parseInt(prompt("Digite um número:"));
let soma = 0;
let i = 1;

while (soma < 500) {
  soma = num * i;
  i++;
}

console.log("O último valor multiplicado é: " + soma);


