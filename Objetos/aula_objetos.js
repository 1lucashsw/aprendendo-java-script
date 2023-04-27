/*
const pessoa = {

    nome: 'Lucas W Soares',
    idade: 20,

    descrever: function () {
        console.log(`Meu Nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

pessoa.descrever();

console.log(pessoa['nome']);
console.log(pessoa['idade']);
*/

class pessoa {
    nome;
    idade;
    anoDeNascimento;
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever(){
        console.log(`Meu Nome é ${this.nome}, tenho ${this.idade} anos`);
    }
}

const lucas = new pessoa ('Lucas', 20);
const joao = new pessoa ('João', 22);

console.log(lucas);