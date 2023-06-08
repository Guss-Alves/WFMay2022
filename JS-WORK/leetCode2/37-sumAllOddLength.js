/* 
Input: arr = [1,4,2,5,3]
Output: 58
Explanation: The odd-length subarrays of arr and their sums are:
[1] = 1
[1,4,2] = 7
[1,4,2,5,3] = 15
[4] = 4
[4,2,5] = 11
[2] = 2
[2,5,3] = 10
[5] = 5
[3] = 3
If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
*/
let arr1 = [1,4,2,5,3]
var sumOddLengthSubarrays = function(arr) {
    let output = 0;
    let n = arr.length;

    for(let i = 0; i < arr.length; i++){
        let start = n - i;
        let end = 1 + i;
        let total = start * end;

        let odd = Math.floor(total / 2);
        if(total % 2 == 1){
            odd++
        }
        output += odd * arr[i];
    }
    return output;
};
console.log(sumOddLengthSubarrays(arr1));