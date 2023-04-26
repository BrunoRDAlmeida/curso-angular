class Pessoa {
    nome: string = ""
    idade: number = 0

    constructor(nome: string, idade: number) {
        this.nome = nome
        this.idade = idade
    }

    comer(comida: string) {
        return `O ${this.nome} comeu ${comida}`
    }

    fezAniversario() {
        return `O ${this.nome} fez ${++this.idade} anos`
    }
}

const pessoa1 = new Pessoa("Bruno Rocha", 26)

console.log(pessoa1.comer("X-Tudo"))
console.log(pessoa1.fezAniversario())

const pessoa2 = new Pessoa("Bruno Rocha de Almeida", 54)

console.log(pessoa2.comer("Pizza"))
console.log(pessoa2.fezAniversario())