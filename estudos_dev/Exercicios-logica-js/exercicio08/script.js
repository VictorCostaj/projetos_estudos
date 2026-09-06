// 8. Desenvolva um algoritmo para ler dois valores e imprimir uma das três mensagens a seguir:
// ‘Números iguais’, caso os números sejam iguais;
// ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// ‘Segundo maior’, caso o segundo seja maior que o primeiro.

const valor_1 = Number (prompt ("Digite o valor 1"))
const valor_2 = Number (prompt ("Digite o valor 2"))

if (valor_1 == valor_2){
  alert ("numeros iguais")
} else if (valor_1 > valor_2){
  alert ("Primeiro é maior")
} else {
  alert ("Segundo é maior")
}

