// 3. Crie três variáveis, na primeira variável coloque o total de uma compra, por exemplo 149.90. Na segunda variável coloque a quantidade de parcelas, por exemplo 2. Na terceira variável coloque o valor da parcela. Apresente no documento html as seguintes informações:
//  "O valor total da compra foi R$_,_"
//  "Forma de pagamento: _x de R$_,_"

const valorTotalDaCompra = 149.90
const quantidadeDeParcelas = 2
const valorDaParcela = valorTotalDaCompra / quantidadeDeParcelas 

document.write(`O valor total da compra foi R$ ${valorTotalDaCompra}.</br> Forma de pagamento: R$ ${quantidadeDeParcelas}x de R$ ${valorDaParcela}`);