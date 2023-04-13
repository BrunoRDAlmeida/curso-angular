console.log(123);  //number
console.log("123" + 1);   //string

console.log("********************")

console.log(typeof 123);
console.log(typeof Number("123"));
console.log(typeof "123");

/*
    Forma correta de se usar
    Number 123
    Number 123 + 123 = 246
    Number ("123") - 1 = 122

    Cuidado que assim pode gerar Bugs
    Number "123" - 1 = 122
    Number "123" * 2 = 246
*/