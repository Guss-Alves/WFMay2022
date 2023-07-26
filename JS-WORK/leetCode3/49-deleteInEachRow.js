/* 
example 1
Input: grid = [[1,2,4],[3,3,1]]
Output: 8
Explanation: The diagram above shows the removed values in each step.
- In the first operation, we remove 4 from the first row and 3 from the second row (notice that, there are two cells with value 3 and we can remove any of them). We add 4 to the answer.
- In the second operation, we remove 2 from the first row and 3 from the second row. We add 3 to the answer.
- In the third operation, we remove 1 from the first row and 1 from the second row. We add 1 to the answer.
The final answer = 4 + 3 + 1 = 8.
*/
/* 
    BRAIN STORM
    - the idea here is to use th splice methoad to remove the elements from the array ( grid[i].splice(j, 1); )
    while grid[0].length is >= 0
    - we also need to sort the arrays like this " grid[i].sort((a, b)=> a - b); "

*/
let test = [[1,2,4],[3,3,1]];
let test2 = [[10]];
let test3 = [[9,81],[33,17]]; //98

//I WAS ABLE TO GET REALLY CLOSE, BUT NOT TO A ANS FOR EVERY TEST CASE

var deleteGreatestValue = function(grid) {
    let sum = 0;
    let temp = 0;
    let biggestVal = 0;
    while(grid[0].length){
        for (let i = 0; i < grid.length; i++) {
            //here we are sorting the nested array
            grid[i].sort((a, b)=> a - b);
            //here we are choosing the element we want to delete
            let last = grid[i].length - 1;
            for (let j = 0; j < grid[i].length; j++) {
                temp = grid[i][grid[i].length - 1 ];
                if(temp > biggestVal){
                    biggestVal = temp;
                }
            }
            grid[i].splice(last, 1);
        }
        sum += biggestVal;
        // if(grid[0].length <= 1){
        //     return sum;
        // }
    }
    return sum;
};
console.log(deleteGreatestValue(test3));