/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instacie uma pessoa chamando José que tem 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;

*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura; 
    }

    calcularImc(){
        return this.peso / (this.altura * this.altura);
    }
    classificarImc(){
        const imc = this.calcularImc;
        if (imc < 18.5 ) {
            return ('Abaixo do Peso');
        }else if (imc >= 18.5 && imc < 25) {
            return ('Esta no Peso Normal');
        }else if (imc  >= 25 && imc < 30) {
            return ('Esta Acima do Peso');
        }else if (imc  >= 30 && imc < 40) {
            return ('Esta Obeso');
        }else {
            return ('Esta com Obesidade Grave');
        }
    }
}   
const jose = new Pessoa ('Jose', 70, 1.75);
console.log(jose.calcularImc())
console.log(jose.classificarImc());
