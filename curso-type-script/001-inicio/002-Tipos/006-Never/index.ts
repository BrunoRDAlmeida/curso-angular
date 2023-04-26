const error = (): never => {
    throw new Error("Algo deu errado");
}

const loop = (): never => {
    while (true) {
        console.log("Olá")
    }
}

const validate = (value: any) => {
    if (typeof value === "string") {
        return console.log("É uma string")
    } else if (typeof value === "number") {
        return console.log("É uma number")
    }
    console.log(error())
}

validate({ nome: "Bruno" })