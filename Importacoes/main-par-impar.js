/*
2) Faça um programa que receba N quantidade de números e seus respectivos valores.
Imprima o maior número par e o menor número impar.

    Exemplo:
        Entrada:
            5
            3
            4
            1
            10
            8

        Saída:
            Número maior par: 10
            Menor número impar: 1
*/

const {gets, print} = require ('./funcoes-auxiliares4');

let i = 0;
let maiorPar = gets(i);
let menorImpar = gets(i);
    
for (let i = 0 ; i <= 5 ; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorPar && numeroSorteado %2 == 0) {
         maiorPar = numeroSorteado;
    
    }if (numeroSorteado < menorImpar && numeroSorteado %2 == 1) {
         menorImpar = numeroSorteado;
    }

}

print(maiorPar);
print(menorImpar);