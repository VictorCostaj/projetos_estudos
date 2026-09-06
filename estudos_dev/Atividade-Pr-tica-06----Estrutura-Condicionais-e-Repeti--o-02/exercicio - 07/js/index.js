// Utilizando do...while, imprima na tela a soma de todos os números
// entre 10 e 100.

var soma = 0;
var i = 10;

do {
  soma += i;
  i++;
} while (i <= 100);

document.write("A soma de todos os números entre 10 e 100 é " + soma + ".");

