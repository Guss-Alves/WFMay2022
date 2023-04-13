/*
example 1
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

example2 
Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].

example3
Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
*/
let digits1 = [1,2,3];
let digits2 = [4,3,2,1];
let digits3 = [9];

const plusOne = (digits)=>{
    for(let i = 0; i < digits.length; i++){
        if(i === digits.length - 1){
            digits[i] += 1;
        }
    }
    return digits;
}

console.log(plusOne(digits2));