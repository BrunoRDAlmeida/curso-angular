// const stringArray = ["A", "C", "D", "W", "L", "B"];

// console.log(stringArray.sort());
// console.log(stringArray.reverse());

// const numberArray = [ 10, 20, 30, 40, 50, 1000, 1, 55, 15];

// console.log(numberArray.sort((a,b) => a - b));
// console.log(numberArray.sort((a,b) => b - a));
// console.log(numberArray.sort((a,b) => a - b).reverse());

const objArray = [
    {
        nome: "Bruno Rocha",
    },
    {
        nome: "Vitor Rocha",
    },
    {
        nome: "Gabriel Arruda",
    },
    {
        nome: "Willian Cesar",
    },
    {
        nome: "Gustavo Xavier",
    },
    {
        nome: "Jose Carlor",
    },
];

console.log(objArray.sort((a,b) => a.nome.localeCompare(b.nome)));
console.log(objArray.sort((a,b) => b.nome.localeCompare(a.nome)));
console.log(objArray.sort((a,b) => a.nome.localeCompare(b.nome)).reverse());
