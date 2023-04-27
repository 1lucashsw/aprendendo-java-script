/*
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
*/

function aplicarDeconto(valor, desconto){
    return (valor - (valor * (desconto / 100)));

}
function aplicarJuros(valor, juros){
    return (valor + (valor * (juros / 100)));
}

precoEtiqueta = 100;
formaDePagamento = 3;

if (formaDePagamento === 1){
    console.log('O desconto foi de R$: ' + aplicarDeconto((precoEtiqueta +10) , precoEtiqueta));
    console.log('E o valor ficou em: R$ ' + aplicarDeconto(precoEtiqueta, 10));
}else if (formaDePagamento === 2){
    console.log('E o valor ficou em: R$ ' + aplicarDeconto(precoEtiqueta, 15))
}else if (formaDePagamento === 3){
    console.log('E o valor ficou em: R$ ' + precoEtiqueta);
}else if(formaDePagamento === 4){
    console.log('E o valor ficou em: R$ ' + aplicarJuros(precoEtiqueta, 10 ))
}