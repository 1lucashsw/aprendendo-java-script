/*3) Faça um programa que receba a quantidade de números e seus respectivos valores.
Imprima todos os números pares.
Exemplo:
    Entrada:
        5
        1
        3
        9
        10
        12

    Saída:
        Números Pares: 10, 12
*/

const {gets, print} = require ('./funcoes-auxiliares2');

for (let i = 0 ; i <=5 ; i++){
    const sobras = gets();
    if ( sobras %2 == 0){
        print('Os numeros pares sao: ' + sobras);
    }

}