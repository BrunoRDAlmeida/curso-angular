export namespace Pessoa {
    export namespace Bruno {
        export let nome = "Bruno"
    
        const data = 1 + 1
    
        export const calc = () => {
            return data 
        }
    }
    
    export namespace Vitor {
        export let nome = "Vitor"
    
        const data = 1 + 1
    
        export const calc = () => {
            return data 
        }
    }
}


console.log(Pessoa.Bruno.nome)
console.log(Pessoa.Vitor.nome)
