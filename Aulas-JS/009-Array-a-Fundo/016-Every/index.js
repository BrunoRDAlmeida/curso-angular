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
    É bacana entender que, se você tem uma condição, ela vai tratar toda sua Array,
    assim podemos verificar se eles estão ok.
*/

const temRefri = pedidos.every((element) => {
    return element.bebida === "Refrigerante";
});

console.log(temRefri)