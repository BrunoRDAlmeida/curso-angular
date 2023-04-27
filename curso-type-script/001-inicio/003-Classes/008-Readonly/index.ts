// readonly serve para deixar como somente escrita , e não pode ser auterado depois

class Pessoa {
    public readonly nome: string = "Bruno Rocha"
}

let pessoa = new Pessoa()

console.log(pessoa.nome)
// pessoa.nome = "Vitor" 
console.log(pessoa.nome)