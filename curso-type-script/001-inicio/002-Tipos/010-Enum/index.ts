enum Mes {
    JAN = "Janeiro",
    FEV = "Fevereiro",
    MAR = "Março",
}

const pessoa: { nome: string, mesAniversario: string } = {
    nome: "Bruno",
    mesAniversario: Mes.MAR,
}

if (pessoa.mesAniversario === Mes.MAR) {
    console.log(pessoa)
}