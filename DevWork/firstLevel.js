
let stock1= ["apple", 101];
let stock2 = ["Tesla", 110];

function whichStock(s1, s2){
//create logic
if(s1[1] > s2[1]){
    return "Buy " + s1[0] + " now!!, good price at " + s1[1]
}else{
    return `Buy ${s2[0]} now!!, good price at ${s2[1]}`
}

}

//test cases

// console.log(whichStock(stock1, stock2));
//leetcode soon starting from easy levels

const oneTo100 = () => {
    for(let i = 0; i < 100; i++){
        console.log(i);
    }
}

console.log(oneTo100());
