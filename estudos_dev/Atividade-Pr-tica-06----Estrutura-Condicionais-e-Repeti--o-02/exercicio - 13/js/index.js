// Faça um algoritmo que armazene um número e imprima os
// números ímpares entre 1 e o número armazenado.



let numero = prompt("Digite um número:");
for (let i = 1; i <= numero; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

