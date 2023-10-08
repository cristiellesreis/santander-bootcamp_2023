"use strict";
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [3]);
const stgArray = concatArray(["eu sou", "linda"], ["absoluta"]);
numArray.push("olá");
console.log(numArray);
console.log(stgArray);
