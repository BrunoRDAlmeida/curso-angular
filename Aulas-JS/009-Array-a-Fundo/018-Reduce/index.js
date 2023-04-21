const pedidos = [
    {
        id: 420,
        nome: "Bruno",
        alimento: "Sandubão de Bacon",
        bebida: "Suco de Limão",
        preco: 100
    },
    {
        id: 152,
        nome: "Vitor",
        alimento: "X Tudo",
        bebida: "Fanta Laranja",
        preco: 59
    },
    {
        id: 29,
        nome: "Jose",
        alimento: "Coxinha",
        bebida: "Suco de Uva",
        preco: 33
    },
    {
        id: 33,
        nome: "Gabriel",
        alimento: "Sandubão de Picanha",
        bebida: "Refrigerante",
        preco: 79
    },
    {
        id: 55,
        nome: "Willian",
        alimento: "Pizza",
        bebida: "Refrigerante",
        preco: 47
    },
];

/*
    O some pergunta se apenas 1 dos valores da Arrat equivale a sua condição
*/

const balancete = pedidos.reduce((total, element) => {
    return total + element.preco;
}, 0);

console.log(balancete);