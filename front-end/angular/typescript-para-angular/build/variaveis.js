"use strict";
/**
 *variaveis
 */
//tipos primitivos: boolean, number, string
let ligado = false;
let nome = "cristielle";
let idade = 30;
let altura = 1.9;
//null
let nulo = null;
//undefined
let indefinido = undefined;
//tipos abrangentes: any, void
let retorno;
let retornoView = false;
//objeto - sem previsibilidade
let produto = {
    name: "cristielle",
    idade: "29",
    cidade: "praia grande"
};
let meuProduto = {
    nome: "tenis",
    preco: 89.99,
    unidades: 5,
};
/**
 * arrays
 */
let dados = ["felipe", "ana", "adriana"];
let dados2 = ["felipe", "ana", "adriana"];
let infos = ["felipe", 30, "ana"];
/**
 * tuplas
 */
let boleto = ["agua conta", 199.90, 414215422];
/**
 * arrays - metodos
 */
dados.pop();
/**
 * Datas
 */
let aniversario = new Date("2022-12-01 05:00");
console.log(aniversario.toString());
