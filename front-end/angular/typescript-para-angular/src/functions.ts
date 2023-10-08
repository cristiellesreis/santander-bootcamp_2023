
//funções

function addNumber(x: number, y: number): number {
    return x+y;
}

function addToHello(name: string){
    return `Hello ${name}`;
}

function CalltoPhone(phone: number | string): number | string {
    return phone;
}

async function getDatabase(id:number): Promise<number | string> {
    return "felipe";
}

let soma: number = addNumber(4,7);
console.log(soma);

console.log(CalltoPhone(443133216));
