/* 
    O Strict mode elimina alguns erros silenciosos
    que passariam batido so JavaScript e os faz emitir erros.

    Além disso, essa forma corrige alguns erros que tornam o JavaScript dificil 
    de ser otimizado, então algumas vezes os codigosno modo estrito rodam mais 
    otimizados e velozes do que os códigos no 'modo normal'.

    link: https://www.geeksforgeeks.org/strict-mode-javascript/
*/

"use strict";

// var arguments;

(() => {
    teste = "teste";
})();

console.log(teste);