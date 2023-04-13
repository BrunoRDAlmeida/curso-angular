console.log(["Bruno", "Rocha"]); // vai me printar oque tem dentro do array
console.log(["Bruno", "Rocha"].length); // vai me printar quantos objetos tem dentro do array


const funcao = (valor, index) =>{
    console.log(valor, index);
};

["Bruno", "Rocha", 1].forEach(funcao);
console.log(funcao);
funcao;




// o primeiro parametro da funcao é o objeto de em cada posiçao do array ["bruno", "rocha"]

// a segundo parametro da funcao é a posição do objeto dentro do array [0, 1]

// função sempre leva () no final e para executala tem que colocar (), se não ira fazer nada 