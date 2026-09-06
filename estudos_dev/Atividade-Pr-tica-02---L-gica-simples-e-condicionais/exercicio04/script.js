// O custo de um carro novo ao consumidor é a soma do custo de
// fábrica com a porcentagem do distribuidor e dos impostos
// (aplicados ao custo de fábrica). Supondo que o percentual do
// distribuidor seja de 28% e os impostos de 45%, escrever um
// algoritmo para ler o custo de fábrica de um carro,calcular e escrever
// o custo final ao consumidor.

const custoFabrica = Number(prompt("Digite o custo de fábrica do carro: "));
const percentualDistribuidor = 0.28;
const impostos = 0.45;

const custoConsumidor = custoFabrica * (1 + percentualDistribuidor + impostos);

document.write(`O custo final do carro para o consumidor é R$ ${custoConsumidor.toFixed(2)}`);
