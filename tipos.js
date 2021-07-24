"use strict";
//boolean
var contaPaga = false;
//Number
var idade = 45;
var avaliacao = 5;
//String
var nome = "Marcelo Ceribelli";
// Array
var idades = [10, 29.39];
var idades2 = [34, 656, 766];
//Tuple
var jogadores;
jogadores = ["Marcelo", "Antonio", "João", 25];
//Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var StatusDaAprovacao = StatusAprovacao.Aprovado;
//Any
var retornoDaApi = [123, "Vitor", false];
var retornoDaApi2 = {
//......
};
//Void
function printarNaTela(msg) {
    console.log(msg);
}
// Null e Undefined
var u = undefined;
var n = null;
//Object
function criar(ojecto) {
    // ......
}
criar({
    propriedade: 1,
});
//Never
function loopInfinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro("Algo falhou");
}
// Union Types
function exibirNota(nota) {
    console.log("A nota \u00E9 " + nota + " ");
}
exibirNota("10");
// type Funcionarios = Array<string>;
var funcionarios = [{
        nome: "Marcelo",
        sobrenome: "Ceribelli",
        dataNascimento: new Date()
    }];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log("Nome do funcionário: ", funcionario.nome);
    }
}
