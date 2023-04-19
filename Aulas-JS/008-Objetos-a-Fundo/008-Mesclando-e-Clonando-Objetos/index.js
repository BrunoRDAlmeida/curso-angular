let Tenis = {
    tamnho: 45,
    estoque: true,
};

let link = {link: { a: "a", b: { c: "c" } } };

let clone1 = Tenis;
console.log(clone1);

let mesclar1 = Object.assign(Tenis, link);
console.log(mesclar1);

let mesclar2 = { ...Tenis, ...link};
console.log(mesclar2);

// Nos dara um erro 
// console.log(clone1);

// clone1.estoque = false;
// mesclar1.link.a = "ABC";


// console.log(mesclar1);
// console.log(mesclar2);
// console.log(Tenis);