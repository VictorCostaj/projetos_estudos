// 9. Informe um valor a uma variável e imprima no console se o número
// é primo.

var numero = 13; // atribui um valor para a variável numero
var primo = true;

for (var i = 2; i < numero; i++) {
  if (numero % i === 0) {
    primo = false;
    break;
  }
}

if (primo) {
  console.log(numero + " é primo");
} else {
  console.log(numero + " não é primo");
}


