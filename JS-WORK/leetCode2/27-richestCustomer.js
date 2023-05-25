/* 
Example 2:

Input: accounts = [[1,5],[7,3],[3,5]]
Output: 10
Explanation: 
1st customer has wealth = 6
2nd customer has wealth = 10 
3rd customer has wealth = 8
The 2nd customer is the richest with a wealth of 10.

example 3
Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
Output: 17
*/
let account1 = [[1,5],[7,3],[3,5]];
//                     i
            //         j
// Output: 10
let account2 = [[2,8,7],[7,1,3],[1,9,5]]
// Output: 17

//our goal is to iterate through all the arrays, sum their values, and decide which one is the biggest
var maximumWealth = function(accounts) {
    //we need a var called costumers where we will push the biggest value of each array
    let costumers = [];
    //we need to iterate through the array with i
    for(let i = 0; i < accounts.length; i++){
        //we need a var to keep track of the values
        let money = 0;
        //we will need a double loop where j will go through the array and sum the values and push to costumer
        for(let j = 0; j < accounts[i].length; j++){
            money += accounts[i][j];
        }
        costumers.push(money);
    }
    //now we need a var output
    let output = 0;
    //we need a new loop inside costumers, and make the highest value equal to output
    for(let k = 0; k < costumers.length; k++){
        if(costumers[k] > costumers[k+1]){
            [costumers[k] , costumers[k+1]] = [costumers[k+1] , costumers[k]];
        }
    }
    output = costumers[costumers.length-1];
    return output
};
console.log(maximumWealth(account2));
