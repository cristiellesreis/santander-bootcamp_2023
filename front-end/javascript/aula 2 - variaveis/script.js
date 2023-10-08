// tipos primitivos

//booleano
var vOuF = false;
console.log(typeof(vOuF));

//number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//string
var nomeQualquer = "cristielle";
console.log(typeof(nomeQualquer));

// como declarar
var variavel = "cristielle";
variavel = "reis"
console.log(variavel);

let variavel2 = "Cristielle"
variavel2 = "reis"
console.log(variavel2);

const constante = "cristielle";
constante = "reis"
console.log(constante);

var escopoGlobal = "global";
console.log(escopoGlobal);

function escopoLocal(){
    let escopoLocalInterno = "local";
    console.log(escopoLocalInterno);
}

escopoLocal();

//atribuicao
var atribuicao = "Cristielle";

//comparação
var comparacao = "0" == 0;
console.log(comparacao);

//comparacao identica

var comparacaoIdentica = "0" ===0;
console.log(comparacaoIdentica);

//adicao
var adicao = 1+1;
console.log(adicao);

//subtracao
var subtracao = 2-1;
console.log(subtracao);

//multiplicacao
var multiplicacao = 2*3;
console.log(multiplicacao);

//divisao
var divisao = 10/2;
console.log (divisao);

//divisao inteira
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

//potenciaçao
var potenciacao = 2**10;
console.log(potenciacao);

//maior que
var maiorQue= 5>2;
console.log(maiorQue);

//maior ou iual a
var maiorOuIgualA = 5>=2;
console.log(maiorOuIgualA);

//menor ou igual
var menorOuIgual = 5<=2;
console.log(menorOuIgual);

//operadores logicos
var e = true && true;
console.log(e);

var ou = false || false;
console.log(ou);

var nao = !true;
console.log(nao);