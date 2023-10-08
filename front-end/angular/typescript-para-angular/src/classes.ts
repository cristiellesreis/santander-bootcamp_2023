//classes

/*
data modifiers - modificadores de acesso
private
public
protect
*/
class Character{
    public name?:string;
    readonly stregth: number;
    skill: number;

    constructor(name: string, stregth: number, skill: number){
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    attack(): void{
        console.log(`Attack with ${this.stregth} points`);
    }
}

//Magician: subclass
//Character: superclass

class Magician extends Character{
    magicPoints: number
    constructor(
        name: string, 
        stregth: number, 
        skill: number, 
        magicPoints: number
        ){
        super(name, stregth, skill)
        this.magicPoints = magicPoints;
    }
}

const p1 = new Character("Ruy", 10, 98);
const p2 = new Magician("Mago", 9, 30, 100);
p1.attack();
