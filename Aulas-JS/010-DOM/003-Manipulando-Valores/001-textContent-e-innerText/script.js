"use strict";

/*
    textContent => Retorna o texto COM formatações, mas sem os elemnetos
    innerText => Retorna somente o texto, sem formatações ou elementos
*/

const p = document.querySelector("p")

console.log(p.textContent);
console.log(p.innerText);

p.textContent = "Bruno Rocha"
p.innerText = "Bruno Rocha"