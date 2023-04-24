"use strict";

const form = document.forms.namedItem("registration")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const name = form.name.values;
    const password = form.password.values;

    FormData.set("name", name)
    FormData.set("password", password)

    FormData.log(FormData.has("name", name))
    FormData.log(FormData.has("password", password))

    FormData.log(FormData.get("name", name))
    FormData.log(FormData.get("password", password))

    //Delete
    FormData.delete("name")
    console.log(FormData.has("name"))

    // if (name && password) {
    //     console.log(name, password)
    //     form.submit()
    // }
})