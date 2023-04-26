/*
    Classes, métodos e campos no Typescript podem ser abstratos

    Um método abstrato ou campo abstrato é aquele que não teve
    uma implementação fornecida

    O papel das classes abstratas é servir como uma classe base para 
    subclasses que implementam todos os membros abstratos

    Quando uma classe não possui membros abstratos, ela é chamada de concreta
*/

abstract class Pessoa {
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

    protected abstract profissao: string
    public abstract qualSuaProfissao(): string
    public abstract qualSeuSalario(salario: number): number

}

class Bruno extends Pessoa {
    protected profissao: string = "Programador"
    constructor() {
        super("Bruno", 26)
    }

    public qualSuaProfissao(): string {
        //validações
        return `Sua Profissão é ${this.profissao}`
    }

    public qualSeuSalario(salario: number): number {
        //validações
        return salario
    }
}

class Vitor extends Pessoa {
    protected profissao: string = "Cozinheiro"
    constructor() {
        super("Vitor", 22)
    }

    public qualSuaProfissao(): string {
        return `Sua Profissão é ${this.profissao}`
    }

    public qualSeuSalario(salario: number): number {
        //validações
        return salario
    }
}

const bruno = new Bruno()
console.log(bruno.comer("arroz"))