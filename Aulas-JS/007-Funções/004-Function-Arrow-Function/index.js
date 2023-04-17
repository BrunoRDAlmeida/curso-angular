
function nomeFunc() {
    return "Bruno Rocha";
}
console.log(nomeFunc());

//------------------------------------------------

const nomeFuncArrow = () => {
    return "Bruno Rocha";
}
console.log(nomeFuncArrow());

//------------------------------------------------

const nomeFuncArrowReturn = () => "Bruno Rocha";
console.log(nomeFuncArrowReturn());

//------------------------------------------------

const nomeFuncArrowHoisting = () => {
    return "Bruno Rocha";
}
console.log(nomeFuncArrowHoisting());

//------------------------------------------------

//Não Funciona o arguments
// const nomeFuncArrowArguments = () => {
//     return arguments;
// }
// console.log(nomeFuncArrowArguments());

//------------------------------------------------

function nomeFuncArguments() {
    return arguments;
}
console.log(nomeFuncArguments("Bruno Rocha"));

//------------------------------------------------

const lanches = {
    cardapio: [
        { nome: "x-salada", preco: "R$25" },
        { nome: "x-bolovo", preco: "R$30" },
    ],

    meuPedidoFunc: function (select) {
        return console.log(this.cardapio[select]);
    },

    meuPedidoFuncTimeOut: function () {
        setTimeout(function () {
            console.log(this.cardapio);
            console.log(this);
        }, 1000);
    },

    meuPedidoArrowFunc: (select) => {
        this.cardapio = [
            { nome: "x-salada", preco: "R$25" },
            { nome: "x-bolovo", preco: "R$30" },
        ];

        return console.log(this.cardapio[select]);
    },
};

lanches.meuPedidoFunc(1);
lanches.meuPedidoArrowFunc(1);
lanches.meuPedidoFuncTimeOut();

//------------------------------------------------

class newFunc {
    constructor(nome) {
        this.nome = nome;
    }
}

const a = new newFunc("Bruno Rocha");
console.log(a.nome);