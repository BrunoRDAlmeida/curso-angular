"uso strict";

const link = document.querySelector("a")

link.addEventListener("link", (event) => {
    event.preventDefault()
    console.log("Evento prevenido")
})
