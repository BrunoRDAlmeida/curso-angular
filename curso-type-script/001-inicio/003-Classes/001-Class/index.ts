/*
    Uma classe Typescript é uma estrutura de programação orientada a objeto
    que possui um conjunto de propriedades e métodos.

    A classe é um modelo para criar objetos, permitindo que você defina
    uma estrutura com propriedades e comportamentos.
*/

class Pessoa {
    nome: string
    idade: number

    constructor(nome:string,idade:number){
        this.nome = nome
        this.idade = idade
    }
}

const pessoa1 = new Pessoa("Bruno Rocha", 26)
const pessoa2 = new Pessoa("Bruno Rocha de Almeida", 55)

console.log(pessoa1.nome)
console.log(pessoa1.idade)

console.log(pessoa2.nome)
console.log(pessoa2.idade)