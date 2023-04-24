"uso strict";

const menu = document.querySelector("#menu");

menu.addEventListener("click", (event) => {
    const { target } = event;
    const body = document.querySelector("body");

    switch (target.getAttribute("class")) {
        case "home":
            body.style.background = "gray";
            break;

        case "sobre":
            body.style.background = "green";
            break;

        case "contato":
            body.style.background = "#FFF";
            break;
    }
});