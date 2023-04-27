/*
2) Faça um programa que receba a quantidade de números e seus respectivos valores. 
Imprima o maior e o menor número deste conjunto.

Exemplo:
    Entrada:
        4
        100
        150
        90
        200

    Saída:
        Maior número: 200
        Menor número: 90
*/

const {gets, print} = require ('./funcoes-auxiliares1');

let i = 0;
let maiorNumero = gets(i);
let menorNumero = gets(i);

for (let i = 0 ; i <= 5; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorNumero) {
        maiorNumero = numeroSorteado;
    }if (numeroSorteado < menorNumero) {
        menorNumero = numeroSorteado;
    }
}

    
print(maiorNumero);
print(menorNumero);