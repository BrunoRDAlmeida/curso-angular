// Typescript
// npm install -g typescript
// tsc --int

// plugin: Code Runner
// npm i -g ts-node
// ctrl + alt + n

// tsc index.ts convertera para index.js

console.log("npm install -g typescript")

const pedido = (pedido: string) => {
    return `Deu bom oseu pedido ${pedido}`
}

console.log(pedido("123"))