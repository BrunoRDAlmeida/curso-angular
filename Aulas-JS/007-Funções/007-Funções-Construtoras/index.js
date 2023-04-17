function Name(name, sobrenome) {
    this.name;

    this.sobrenome = () => {
        const nomeCompleto = `${this.name} ${sobrenome}`;
        return nomeCompleto;
    };
}

const bruno = new Name("Bruno", "Rocha");

console.log(bruno.sobrenome());

function Calculadora() {
    this.soma = (num1, num2) => {
        return `${num1} ${num2}`;
    }
};

this.subtracao = new Calaculadora();

console.log(calculadora.soma)(1, 2);
console.log(calculadora.subtracao)(5, 2);