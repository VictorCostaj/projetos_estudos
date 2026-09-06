// Crie uma função que recebe um vetor de inteiros e um número
// inteiro e retorne verdadeiro se o número faz parte do vetor ou falso
// se não faz parte.

function numeroEstaNoVetor(vetor, numero) {
    for (let i = 0; i < vetor.length; i++) {
      if (vetor[i] === numero) {
        return true;
      }
    }
    
    return false;
  }
  