"use strict";

const form = document.forms.namedItem("registration")

form.addEventListener("input", (event) => { // submit , input , change
    event.preventDefault()

    const name = form.name.values;

    const newDivElement = document.createElement("div")
    newDivElement.innerText = name.toUpperCase()

    form.nextElementSibling.remove()
    form.after(newDivElement)
})