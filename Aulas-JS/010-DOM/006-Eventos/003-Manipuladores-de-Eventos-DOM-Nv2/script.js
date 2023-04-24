"uso strict";

const btn = document.querySelector("button")
const body = document.querySelector("body")

btn.addEventListener("click", (event) => {
    body.style.background = "gray"
})

btn.addEventListener("mouseleave", (event) => {
    body.style.background = "#FFF"
})