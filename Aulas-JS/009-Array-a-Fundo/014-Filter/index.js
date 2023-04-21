const pedidos = [
    {
        id:420,
        nome: "Bruno",
        alimento: "Sandubão de Bacon",
        bebida: "Suco de Limão"
    },
    {
        id:152,
        nome: "Vitor",
        alimento: "X Tudo",
        bebida: "Fanta Laranja"
    },
    { id:29, nome: "Jose", alimento: "Coxinha", bebida: "Suco de Uva"},
    {
        id:33,
        nome: "Gabriel",
        alimento: "Sandubão de Picanha",
        bebida: "Refrigerante"
    },
    { id:55, nome: "Willian", alimento: "Pizza", bebida: "Refrigerante"},
];

/*
    Como o nome já diz, esse metodo deve ser utilizado quando temos a necessidade de filtrar nossa lista
*/

const filterRefri = pedidos.filter((Element, index) => {
    return Element.bebida === "Refrigerante";
});

console.log(pedidos);
console.log(filterRefri);