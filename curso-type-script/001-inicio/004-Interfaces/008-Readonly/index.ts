/*
    As interfaces Typescript definem os contratos em seu código
    Eles também fornecem nomes explícitos para verificação de tipo
*/

interface IPessoa {
    nome: string
    idade: number
    readonly cpf: number
    enabled(): boolean
}

let pessoa: IPessoa = {
    nome: "Bruno", idade: 26, cpf: 11111111111, enabled: () => {
        return true
    },
}

class Vitor implements IPessoa {
    nome: string = "Vitor"
    idade: number = 22

    readonly cpf: number = 11111

    enabled(): boolean {
        return true
    }
}

class Iki implements IPessoa {
    nome: string = "Iki"
    idade: number = 36

    readonly cpf: number = 222222

    enabled(): boolean {
        return false
    }
}
