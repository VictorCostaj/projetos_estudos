// Crie uma função que recebe 2 vetores de 10 elementos inteiros e que
// retorne a união dos dois em um novo vetor.

const vetor1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const vetor2 = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const uniao = [];

for (let i = 0; i < vetor1.length; i++) {
  uniao.push(vetor1[i]);
}

for (let i = 0; i < vetor2.length; i++) {
  if (!uniao.includes(vetor2[i])) {
    uniao.push(vetor2[i]);
  }
}

console.log(uniao);
