/*
    First assignment understand OOP in JavaScript ;)
*/

class Ninja{
    constructor(nameInput, healthInput){
        this.name = nameInput;
        this.health = healthInput;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(`Hello, my name is ${this.name}`)
    }
    showStats(){
        console.log(`Ninja's stats \n name : ${this.name} \n strength : ${this.strength} \n speed : ${this.speed} \n health : ${this.health}`)
    }
    drinkSake(){
        this.health += 10;
    }
}

let ninja1 = new Ninja("Gustavo", 100);
let ninja2 = new Ninja('Rob', 150)
ninja1.drinkSake();
ninja2.drinkSake();
ninja2.showStats();

