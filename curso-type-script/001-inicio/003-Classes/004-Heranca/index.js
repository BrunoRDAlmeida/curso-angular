/*
    public -- Pode ser acessado tanto pela mesma classe, classes filhas e outras classes

    protected -- Pode ser acessado pela mesma classe e classe filhas, não pode ser acessado por outras classes

    private -- Pode ser acessada somente pela própria classe
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = "";
        this.idade = 0;
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.comer = function (comida) {
        return "O " + this.nome + " comeu " + comida;
    };
    Pessoa.prototype.fezAniversario = function () {
        return "O " + this.nome + " fez " + ++this.idade + " anos";
    };
    return Pessoa;
}());
var Bruno = /** @class */ (function (_super) {
    __extends(Bruno, _super);
    function Bruno() {
        return _super.call(this, "Bruno", 26) || this;
    }
    return Bruno;
}(Pessoa));
var Vitor = /** @class */ (function (_super) {
    __extends(Vitor, _super);
    function Vitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Vitor;
}(Pessoa));
var bruno = new Bruno();
var vitor = new Vitor("Vitor", 22);
console.log(bruno.nome);
console.log(bruno.idade);
console.log(vitor.nome);
console.log(vitor.idade);
console.log(bruno.comer("X-tudo"));
console.log(bruno.fezAniversario());
