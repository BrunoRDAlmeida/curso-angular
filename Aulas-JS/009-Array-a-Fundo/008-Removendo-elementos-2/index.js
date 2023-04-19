/*
    slice = pega os dados dentro de um range sem quebrar o Array
    splice = remove os dados do Array dentro de um range
*/

let arr = [
    { nome: "Bruno", tel: "(99) 99999-9999" },
    { nome: "Vitor", tel: "(99) 99999-9999" },
    { nome: "Biel", tel: "(99) 99999-9999" },
    { nome: "Jose", tel: "(99) 99999-9999" },
    { nome: "Xavier", tel: "(99) 99999-9999" },
];

console.table(arr);

console.log(arr.splice(4, 1)); // desta forma estarei deletando um dado especifico dentro do array
console.log(arr.splice(0, 3)); // desta forma estarei deletando o primeiro dado ao terceiro dado

// const newArray = arr.slice(2, 4); // desta forma estamos copiando os dados des da posição 2 ate a posição 4
// console.table(newArray);

console.table(arr);