const myArrayObj = [
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
    {
        nome: "Jose2",
        sobreNome: "Carlos",
    },
    {
        nome: "Jose3",
        sobreNome: "Carlos",
    },
];

for (let item of myArrayObj) {
    if (item.nome === "Vitor") {
        console.log("Achei o Vitor");
        continue;
    }

    if (item.nome === "Jose") {
        console.log("Achamos o Rei do Tab");
        break;
    }
    console.log(item);
}