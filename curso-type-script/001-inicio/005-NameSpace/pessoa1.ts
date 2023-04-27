/*
    Os Namespaces são uma forma específica do Typescript para organizar códigos
    Namespaces são simplesmente objetos JavaScript nomeados no namespace global
    Isso torna os namespaces uma construção muito simples de usar.
 */

export namespace Pessoa1 {
    export let nome = "Bruno"

    const data = 1 + 1

    export const calc = () => {
        return data 
    }
}

console.log(Pessoa1.nome)
console.log(Pessoa1.calc())