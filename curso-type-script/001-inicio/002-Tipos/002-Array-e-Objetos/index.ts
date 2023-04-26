let array1: [string, string, number, boolean] = ["Bruno", "Rocha", 123, false]

let array2: Array<string | number | boolean> = [true, "Bruno", 123, "Rocha"]

let obj1: { nome: string, sobrenome: string, idade: number, deuBom: boolean } = {
    nome: "Bruno",
    sobrenome: "Rocha",
    idade: 26,
    deuBom: true
}

let obj2: Array<{ nome: string, sobrenome: string, idade: number, deuBom: boolean }> = [
    {
        nome: "Bruno",
        sobrenome: "Rocha",
        idade: 26,
        deuBom: true
    },
    {
        nome: "Bruno1",
        sobrenome: "Rocha",
        idade: 26,
        deuBom: true
    },
    {
        nome: "Bruno2",
        sobrenome: "Rocha",
        idade: 27,
        deuBom: false
    },
]

console.log(array1)
console.log(array2)
console.log(obj1)
console.log(obj2)
