/* 
example 1 
Input: n = 7
Output: 21
Explanation: Numbers in the range [1, 7] that are divisible by 3, 5, or 7 are 3, 5, 6, 7. The sum of these numbers is 21.

example 2
Input: n = 10
Output: 40
Explanation: Numbers in the range [1, 10] that are divisible by 3, 5, or 7 are 3, 5, 6, 7, 9, 10. The sum of these numbers is 40.

example 3 
Input: n = 9
Output: 30
Explanation: Numbers in the range [1, 9] that are divisible by 3, 5, or 7 are 3, 5, 6, 7, 9. The sum of these numbers is 30.
*/
let n1 = 7;
let n2 = 10;
let n3 = 9;

//our goal is to loop throught the range from 1 to n, and find the number that are divisible by 3, 5 or 7
//after find these number, we want to sum them
var sumOfMultiples = function(n) {
    //we want a var count, to keep track of the values
    let count = 0;
    //we want to loop from 1 to n 
    for(let i = 1; i < n + 1; i++){
        //the we want to check if i is divisible by 3, 5 or 7
        if(i % 3 == 0 || i % 5 == 0 || i % 7 == 0){
            //if so we want to sum it to var count
            count += i;
        }
    }
    //then we want to return count at the end
    return count;
};

console.log(sumOfMultiples(n3));