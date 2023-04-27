/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoGasolina = 5.5;
const gastoMedioGasolina = 10;
const precoEtanol = 3.5;
const gastoMedioEtanol = 8;
const distancia = 100;
const tipoCombustivel = 'Gasolina'

if (tipoCombustivel === 'Gasolina'){
    const gastosGasolina = (distancia * precoGasolina) / gastoMedioGasolina;
    console.log('O valor gasto de Gasolina nesta viágem é de: ' + gastosGasolina.toFixed(2));
}else {
    const gastosEtanol = (distancia * precoEtanol) / gastoMedioEtanol;
    console.log('O valor gasto de Etanol nesta viágem é de: ' + gastosEtanol.toFixed(2));  
}