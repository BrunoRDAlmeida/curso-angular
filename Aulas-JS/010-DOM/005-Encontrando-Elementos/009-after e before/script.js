"use strict";

const container = document.querySelector("container")

const newP = document.createElement("p")
newP.innerText = "Olá, Mundo"

container.before("newP")
// container.after("<p>Olá, Mundo</p>")

