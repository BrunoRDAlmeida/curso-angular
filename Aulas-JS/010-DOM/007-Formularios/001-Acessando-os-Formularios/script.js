"use strict";

const form = document.forms.namedItem("registration")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const name = form.name.values;
    const password = form.password.values;

    console.log(name, password)
})