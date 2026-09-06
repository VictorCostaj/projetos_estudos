// Desenvolva um algoritmo que preenche um vetor com os 4
// primeiros números perfeitos.

const vetor = [];
let contador = 0;
let numero = 2;

while (contador < 4) {
  let somaDivisores = 1;

  for (let i = 2; i <= numero / 2; i++) {
    if (numero % i === 0) {
      somaDivisores += i;
    }
  }

  if (somaDivisores === numero) {
    vetor.push(numero);
    contador++;
  }

  numero++;
}

document.write(vetor);
