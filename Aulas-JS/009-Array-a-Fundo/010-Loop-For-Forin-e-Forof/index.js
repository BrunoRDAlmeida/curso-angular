const myArray = [1,2,3,4,5,6];
const objArray = [
    {
        nome: "Bruno",
        sobreNome: "Rocha",
    },
    {
        nome: "Vitor",
        sobreNome: "Rocha",
    },
    {
        nome: "Jose",
        sobreNome: "Carlos",
    },
];

// for ([inicialização]; [condição]; [expressão final])
// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }

// for (let i = 0; i < objArray.length; i++) {
//     console.log(objArray[i].nome, objArray[i].sobreNome);
// }

//--------------------------------------------------------------

//for Of
// for (let item of objArray) {
//     console.log(item.nome, item,sobreNome);
// }

// for (let item of myArray) {
//     console.log(item);
// }

//--------------------------------------------------------------

//for in

const obj = { nome: "Bruno", sobremnome: "Rocha"};

for (let item in obj) {
    console.log(item);
}