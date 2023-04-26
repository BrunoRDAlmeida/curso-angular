/*
    public -- Pode ser acessado tanto pela mesma classe, classes filhas e outras classes

    protected -- Pode ser acessado pela mesma classe e classe filhas, não pode ser acessado por outras classes

    private -- Pode ser acessada somente pela própria classe
*/

class Pessoa {
    protected nome: string = ""
    protected idade: number = 0

    constructor(nome: string, idade: number) {
        this.nome = nome
        this.idade = idade
    }

    public comer(comida: string) {
        return `O ${this.nome} comeu ${comida}`
    }

    public fezAniversario() {
        return `O ${this.nome} fez ${++this.idade} anos`
    }
}

class Vitor extends Pessoa {}

class Bruno extends Pessoa {

    private profissao: string = "Programador"

    constructor() {
        super("Bruno", 26)
    }

    public getProfissao(){
        return `${this.nome} trabalha como ${this.profissao}`
    }
}


const bruno = new Bruno()
console.log(bruno.getProfissao())



// const vitor = new Vitor("Vitor", 22)

// console.log(bruno.nome)
// console.log(bruno.idade)

// console.log(vitor.nome)
// console.log(vitor.idade)

// console.log(bruno.comer("X-tudo"))
// console.log(bruno.fezAniversario())