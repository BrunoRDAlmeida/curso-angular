const fn = (nome: string, idade?: number) => {
    if(!idade){
        return `nome: ${nome}, idade: sem valor definido`
    }

    return `nome: ${nome}, idade: ${idade}`
}

console.log(fn("Bruno",26))

console.log(fn("Bruno"))

const pessoa: {nome: string; idade?: number} = { nome: "Bruno", idade: 26 }