// 18. Uma loja de eletrodomésticos estabeleceu as seguintes
// modalidades de pagamento para a venda de suas mercadorias:

// à vista ----------------desconto de 2,5% sobre o preço de tabela;
// De 2 até 5 vezes -------- preço de tabela, sem desconto ou ascréscimo;
// De 6 até 10 vezes ----- juros de 6% sobre o preço de tablea;
// De 11 até 15 vezes----- juros de 13% sobre o preço de tabela

// Escreva um algoritmo que armazene o preço de tabela e o número
// de vezes em que o pagamento será feito. Calcule o valor de cada
// parcela e o preço total da compra e imprima no console.


const precoTabela = 1000; // preço de tabela da mercadoria
const numParcelas = 12; // número de parcelas para o pagamento

let precoFinal; // variável que armazenará o preço final da compra

if (numParcelas === 1) {
  precoFinal = precoTabela * 0.975; // à vista com desconto de 2,5%
} else if (numParcelas >= 2 && numParcelas <= 5) {
  precoFinal = precoTabela; // de 2 até 5 vezes sem desconto ou acréscimo
} else if (numParcelas >= 6 && numParcelas <= 10) {
  precoFinal = precoTabela * 1.06; // de 6 até 10 vezes com juros de 6%
} else if (numParcelas >= 11 && numParcelas <= 15) {
  precoFinal = precoTabela * 1.13; // de 11 até 15 vezes com juros de 13%
} else {
  console.log("Número de parcelas inválido.");
}

if (precoFinal) { // se o preço final foi calculado com sucesso
  const valorParcela = precoFinal / numParcelas;
  console.log(`Preço final da compra: R$${precoFinal.toFixed(2)}`);
  console.log(`Valor de cada parcela: R$${valorParcela.toFixed(2)}`);
}

