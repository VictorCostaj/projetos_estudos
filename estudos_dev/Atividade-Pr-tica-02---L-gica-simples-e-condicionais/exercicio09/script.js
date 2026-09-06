// Escreva um programa que pergunte a velocidade de um carro. Caso
// ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
// multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada
// km acima da velocidade permitida.

const velocidade = prompt("Qual a velocidade do carro em km/h?");

if (velocidade > 80) {
  const multa = (velocidade - 80) * 5;
  alert(`Você foi multado em R$${multa.toFixed(2)} por ultrapassar a velocidade permitida.`);
} else {
  alert("Velocidade dentro do limite permitido.");
}
