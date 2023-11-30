//practicing soon...

//challenges
const test = ()=>{
    //for loop till 100
    for(let i = 0; i < 100; i++){
        console.log("FOR", i);
    }
    //while
    let b = 1
    while(b < 5){
        if(b < 5){
            console.log("B HERE", b);
            b++;
        }
    }
}
const test2 = ()=>{
    let arr = [1,2,3,4,5];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 3 == 0 || arr[i] % 5 == 0){
            console.log(arr[i]);
        }
    }
}

// console.log(test());
console.log(test2());