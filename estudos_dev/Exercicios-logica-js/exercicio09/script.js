// 9. As maçãs desta estação custam R$0,30 se forem compradas menos do que uma dúzia, e R$0,25 se forem compradas pelo menos doze. Desenvolva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

const quantidade = Number(prompt('Quantidade de maçãs'))
let totalCompra = 0

if (quantidade < 12){
  totalCompra = quantidade * 0.3
  document.write(`As maçãs vão custar R$ ${totalCompra}`)
} else {
  totalCompra = quantidade * 0.25
  document.write(`As maçãs vão custar ${totalCompra}`)
}

