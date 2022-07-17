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
        console.log(`Stats \n name : ${this.name} \n strength : ${this.strength} \n speed : ${this.speed} \n health : ${this.health}`)
    }
    drinkSake(){
        this.health += 10;
    }
}
let ninja1= new Ninja("Gustavo", 120);
ninja1.showStats()



class Sensei extends Ninja{
    constructor(nameInput){
        super(nameInput, 200);
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        this.drinkSake()
        console.log('pretend I am saying something really smart kid')
    }
}

let sensei1 = new Sensei('Master Splinter')
sensei1.speakWisdom()
sensei1.showStats()