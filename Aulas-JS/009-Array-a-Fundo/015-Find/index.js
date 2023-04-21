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
    Nome bem subjetivo também, mas ele procura e te retorna 1 o primeiro valor encontrado da array
*/

const findId = pedidos.find((Element) => {
    return Element.id === 29;
});

console.log(findId);