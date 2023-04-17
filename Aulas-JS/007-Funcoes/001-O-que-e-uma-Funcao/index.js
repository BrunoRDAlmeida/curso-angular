// 1 - Declaração da Função

function isValidDeclaration() {
    const soma = 1 + 2;

    if (soma === 3) {
        return true;
    }

    return false;
};

console.log(isValidDeclaration());

// 2 - Expressão da Função

const isValidExpression = function(){
    return false;
};

console.log(isValidExpression())

// 3 - Arrow Function

const isValidArrow = () => 2*2;

console.log(isValidArrow());