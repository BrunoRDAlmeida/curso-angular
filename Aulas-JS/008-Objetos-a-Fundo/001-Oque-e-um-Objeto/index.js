/*
    Objeto: Tenis (Propriedade) "cadarço", "palmilha"
    Objeto: Celular (Propriedade)
    Objeto: Drone (Propriedade)

    Propriedades / Atributos / Funcionalidades
*/

let Tenis = {
    tipo: "Tenis de Corrida",
    cadarco: "G",
    estoque: false,
    tamanho: {
        palmilha: 39,
        tenis: 40,
        caixa: {
            altura: 35,
            largura: 40,
            profundidade: 10,
        },
    },

    MarcaArrayValores: ["Nike", "Adidas", "etc"],
    MarcaArrayObjeto: [
        {
            nome: "Nike",
        },
        {
            nome: "Adidas",
        },
        {
            nome: "etc",
        }
    ],
    getMarcaArrayValores: function (param) {
        return this.MarcaArrayObjeto[param];
    },
    getMarcaArrayObjetos: function (param) {
        return this.MarcaArrayObjeto[param].nome;
    },
};

console.log(Tenis);
console.log(Tenis.tipo);
console.log(Tenis.tamanho);