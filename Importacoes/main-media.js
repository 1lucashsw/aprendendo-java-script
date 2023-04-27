/*
1) Faça um programa que receba a média de um aluno.
Caso a média seja < 5 imprima "Reprovado"
Caso a média seja >= 5 e < 7 imprima "Recuperação"
Caso a média seja >= 7 imprima "Aprovado"

    Exemplo:
        Entrada:
            5.5
        Saída:
            Recuperação
*/


const {gets, print} = require ('./funcoes-auxiliares3');

const nota = gets();

if (nota < 5) {
    print("Aluno Reprovado")
}else if (nota >= 5 && nota < 7) {
    print("Aluno de Recuperacao")
}else if (nota >= 7) {
    print("Aluno Aprovado");
}