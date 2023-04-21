"use strict";

/*
    innerHtml => Retorna o texto, COM formatações e COM elementos HTML
    createElement => cria um elemento HTML
 */

    const div = document.querySelector("div");
    //console.log(1, div)

    //div.innetHTML = `${div.innerHTML} <strong>Esse é meu texto altarado</strong>`
    //console.log(2, div)

    const elementUl = document.createElement("ul")

    [1,2,3].array.forEach(element => {
        const elementLi = document.createElement("li");
        elementLi.innerText = element;
        elementUl.appenChild(elementLi);
    });

    div.appendChild(elementUl);