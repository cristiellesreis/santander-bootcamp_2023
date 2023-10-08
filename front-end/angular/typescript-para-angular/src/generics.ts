//generics

function concatArray<t>(...itens: t[]):t[]{
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1,5], [3]);
const stgArray = concatArray<string[]>(["eu sou", "linda"], ["absoluta"]);

console.log(numArray);
console.log(stgArray);

