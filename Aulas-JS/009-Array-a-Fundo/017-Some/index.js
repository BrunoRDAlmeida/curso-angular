const pedidos = [
    {
        id: 420,
        nome: "Bruno",
        alimento: "Sandubão de Bacon",
        bebida: "Suco de Limão"
    },
    {
        id: 152,
        nome: "Vitor",
        alimento: "X Tudo",
        bebida: "Fanta Laranja"
    },
    { id: 29, nome: "Jose", alimento: "Coxinha", bebida: "Suco de Uva" },
    {
        id: 33,
        nome: "Gabriel",
        alimento: "Sandubão de Picanha",
        bebida: "Refrigerante"
    },
    { id: 55, nome: "Willian", alimento: "Pizza", bebida: "Refrigerante" },
];

/*
    O some pergunta se apenas 1 dos valores da Arrat equivale a sua condição
*/

const existeAlimento = pedidos.some((element, index) => {
    return element.alimento === "Pizza";
});

console.log(existeAlimento)