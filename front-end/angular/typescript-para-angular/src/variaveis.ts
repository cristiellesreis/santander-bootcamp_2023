
/**
 *variaveis
 */

//tipos primitivos: boolean, number, string
let ligado: boolean = false;
let nome: string = "cristielle";
let idade: number = 30;
let altura: number = 1.9;

//null
let nulo: null = null;

//undefined
let indefinido: undefined = undefined;

//tipos abrangentes: any, void
let retorno: void
let retornoView: any = false;

//objeto - sem previsibilidade
let produto: object = {
    name:"cristielle",
    idade: "29",
    cidade:"praia grande"
};

//objeto tipado - com previsibilidade

type ProdutoLoja = {
    nome:string;
    preco:number;
    unidades:number;
};

let meuProduto: ProdutoLoja = {
    nome: "tenis",
    preco: 89.99,
    unidades: 5,
};

/**
 * arrays
 */

let dados: string[] = ["felipe", "ana", "adriana"];
let dados2: Array<string> = ["felipe", "ana", "adriana"];

let infos: (string | number)[]=["felipe",30,"ana"];

/**
 * tuplas
 */

let boleto: [string, number, number] = ["agua conta", 199.90, 414215422];

/**
 * arrays - metodos
 */

dados.pop();

/**
 * Datas
 */

let aniversario: Date = new Date ("2022-12-01 05:00");
console.log(aniversario.toString());
