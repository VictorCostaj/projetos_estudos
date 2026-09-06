// 6. Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes,
// e que exiba a lista desses nomes na tela. Após exibir essa lista, o
// programa deve mostrar também os nomes na ordem inversa em
// que o usuário os digitou.

// Ex:
// Entrada: Édson, Marcelo, Letícia, Ju, Thobias
// Saída: Thobias, Ju, Letícia, Marcelo, Édson

let nomes = [];

for (let i = 0; i < 5; i++) {
  let nome = prompt(`Digite o nome ${i + 1}:`);
  nomes.push(nome);
}

let listaNomes = "";
for (let i = 0; i < nomes.length; i++) {
  listaNomes += nomes[i];
  if (i < nomes.length - 1) {
    listaNomes += ", ";
  }
}
console.log("Nomes digitados: " + listaNomes);

let listaNomesInvertida = "";
for (let i = nomes.length - 1; i >= 0; i--) {
  listaNomesInvertida += nomes[i];
  if (i > 0) {
    listaNomesInvertida += ", ";
  }
}
console.log("Nomes na ordem inversa: " + listaNomesInvertida);
