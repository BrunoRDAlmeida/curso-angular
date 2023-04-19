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
]

myArrayObj.forEach((item, index) =>{
    if (item.nome === "VItor") {
        return console.log("Achei o Vitor");
    }
    console.log(index, item.nome)
});