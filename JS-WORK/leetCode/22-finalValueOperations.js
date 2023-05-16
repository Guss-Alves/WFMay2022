/* 
example 1 
Input: operations = ["--X","X++","X++"]
Output: 1
Explanation: The operations are performed as follows:
Initially, X = 0.
--X: X is decremented by 1, X =  0 - 1 = -1.
X++: X is incremented by 1, X = -1 + 1 =  0.
X++: X is incremented by 1, X =  0 + 1 =  1.

exapmple 2
Input: operations = ["++X","++X","X++"]
Output: 3
Explanation: The operations are performed as follows:
Initially, X = 0.
++X: X is incremented by 1, X = 0 + 1 = 1.
++X: X is incremented by 1, X = 1 + 1 = 2.
X++: X is incremented by 1, X = 2 + 1 = 3.
*/
let operations1 = ["--X","X++","X++"];
// Output: 1
let operations2 = ["++X","++X","X++"]
// Output: 3

let operations3 = ["X++","++X","--X","X--"]
// Output: 0

//we know that --X or X-- means -1, and X++ or ++X means +1
var finalValueAfterOperations = function(operations) {
    //initiate variable x being = 0;
    let x = 0;
    //loop through the operations
    for(let i = 0; i < operations.length; i++){
        //according to the values we decide IF add or subtract from var x
        if(operations[i].includes("--X")){
            x -= 1;
        }
        else if(operations[i].includes("X--")){
            x -= 1;
        }
        else if(operations[i].includes("++X")){
            x += 1;
        }
        else if(operations[i].includes("X++")){
            x += 1;
        }
    }
    return x;
};

console.log(finalValueAfterOperations(operations3));