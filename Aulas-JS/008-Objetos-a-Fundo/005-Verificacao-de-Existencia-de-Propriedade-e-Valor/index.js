const Tenis = {
    tamanho: 45,
    estoque: true,
    marcas: [{ nome: "Nike" }, { nome: "Adidas" }],
    secret: 123456,
    n: 5,
    link: { a: "a é = a", b: { c: "C é = c" } },
};

// hasOwnProperty | propertyName in Tenis

// if (Tenis.hasOwnProperty("tamanho")) {
//     console.log("Existe tamanho")
// } else {
//     console.log("Não Existe tamanho")
// }

console.log(Tenis.hasOwnProperty("tamanho"));
console.log("tamanho" in Tenis);