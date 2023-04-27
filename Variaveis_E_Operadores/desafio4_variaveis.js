/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

var produto = 100;
var descontoDebito = 0.10;
var descontoPix = 0.15;
var juros = 0.10;
var produtoDesconto;
var produtoJuros;
var metodoDePagamento = ''
var parcelamentoEm = 1

if (metodoDePagamento === 'Debito'){
    var debito = (produto * descontoDebito);
    var produtoDesconto = produto - debito;
    console.log('O valor ficou em R$: ' + produtoDesconto.toFixed(2) + ' Reais');

}else if (metodoDePagamento === 'Dinheiro') {
    var pix = (produto * descontoPix);
    var produtoDesconto = produto - pix;
   
    console.log('O valor ficou em R$: ' + produtoDesconto.toFixed(2) + ' Reais');
}else if (metodoDePagamento === 'Pix'){
    var pix = (produto * descontoPix);
    var produtoDesconto = produto - pix;
    console.log('O valor ficou em R$: ' + produtoDesconto.toFixed(2) + ' Reais');
}else if (parcelamentoEm === 2){
    var parcelado = produto / 2;
    console.log('O valor de cada parcela ficou em R$ ' + parcelado.toFixed(2) + ' Reais');
    console.log('E valor total ficou em R$: ' + produto.toFixed(2) + ' Reais');
}else if (parcelamentoEm > 3){
    var parcelado = produto * juros;
    var produtoJuros = produto + parcelado;
    parcelas = produtoJuros / parcelamentoEm;
    console.log('O valor ficou em R$: ' + produtoJuros.toFixed(2) + ' Reais');
    console.log('O valor de cada parcela fiocu em R$ ' + parcelas.toFixed(2) + ' Reais');
}else (exit);

