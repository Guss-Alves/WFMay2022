function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = [];
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
var pizzaN1 = pizzaOven("deep dish", "traditional", "mozzarella",["pepperoni", "sausage"]);{
    console.log(pizzaN1);
}
var pizzaN2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"],["mushrooms", "olives", "onions"]);{
    console.log(pizzaN2);
}
var pizzaN3 = pizzaOven( 'thin', 'white sauce', ['mozzarela, and american cheese'], ['chicken', 'cilantro']);{
    console.log(pizzaN3);
}
var pizzaN4 = pizzaOven ( 'thick crust', 'bbq sauce', 'mozzarela', ['sausage', 'corn', 'bacon']);{
    console.log(pizzaN4);
}