let n1= 2;
let n2= 3;
let n3= 10;

const climbstairs =(n)=> {
    let steps = [];
    steps[1] = 1;
    steps[2] = 2;
    for(let i = 3; i <= n; i++){
        steps[i] = steps[i -1] + steps[i - 2];
    }
    return steps[n];
};
console.log(climbstairs(n3))