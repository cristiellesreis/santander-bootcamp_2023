//o que sao vetores ou arrays

//como declararb um array
/*let array = ['string', 1, true];
console.log(array);*/

//pode guardar varios tipos de dados
let array = ['string', 1, true, ['array1'], ['array2'],['array3'],['array4']];
console.log(array[3]);

/*
//forEach - itera um array 
array.forEach(function(item, index){console.log(item, index)});

//push - insere um novo item no final do array
array.push('novo item');
console.log(array);

//pop - remove um item no final do array
array.pop();
console.log(array);

//shift - remove um item no inicio do array
array.shift();
console.log(array);

//unshift - adiciona um item no inicio do array
array.unshift('novo item');
console.log(array);

//indexOf - retorna o indice de um valor
console.log(array.indexOf(true));

//splice - remove ou substitui um item pelo índice
array.splice(0, 3);
console.log(array);

//slice - retorna uma parte de um array existente
let novoArray = array.slice(0, 3);
console.log(novoArray);*/

//objetos

let object = { string: 'string', number: 1, boolean: true, array: ['array'], objectInterno: {objectInterno:'objeto interno'}};
console.log(object.boolean);


//desestruração do objeto

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var { string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);
