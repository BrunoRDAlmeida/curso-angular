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
    O m´todo Map além de iterar todo o Array ele é muito bom para editar o iterado ( resumindo o Array )
*/

pedidos.map((element, index) => {
    if (element.id === 29 && element.alimento === "Coxinha") {
        return(element.alimento = "Kibe");
    }
});

console.log(pedidos);