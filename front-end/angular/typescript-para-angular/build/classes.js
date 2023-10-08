"use strict";
//classes
/*
data modifiers - modificadores de acesso
private
public
protect
*/
class Character {
    constructor(name, stregth, skill) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
}
//Magician: subclass
//Character: superclass
class Magician extends Character {
    constructor(name, stregth, skill, magicPoints) {
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}
const p1 = new Character("Ruy", 10, 98);
const p2 = new Magician("Mago", 9, 30, 100);
p1.attack();
