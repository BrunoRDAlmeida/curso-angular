const Tenis = {
    tamanho: 45,
    estoque: true,
    marcas: [{ nome: "Nike" }, { nome: "Adidas" }],
    secret: 123456,
    n: 5,
    link: { a: "a é = a", b: { c: "C é = c" } },
};

// const {tamanho, estoque, marcas = "Não possui marca alguma!"} = Tenis;
// console.log(tamanho, estoque, marcas);

// const {secret: RandomNumber, n: Avalicoes } = Tenis;
// console.log(secret);
// console.log(RandomNumber);
// console.log(Avalicoes);

// const { link: { a, b: { c } } } = Tenis;
// console.log(a)

console.log(Tenis.link.a, Tenis.link.b.c);