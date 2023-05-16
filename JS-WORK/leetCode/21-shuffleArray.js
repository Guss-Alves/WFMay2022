/* 
example 1
Input: nums = [2,5,1,3,4,7], n = 3
Output: [2,3,5,4,1,7] 
Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

example 2
Input: nums = [1,2,3,4,4,3,2,1], n = 4
               i       n
    //output = [i,n,i++,n++,...]
Output: [1,4,2,3,3,2,4,1]
*/

let nums1 = [2,5,1,3,4,7]; let n1 = 3
let nums2 = [1,2,3,4,4,3,2,1]; let n2 = 4;

const shuffle = ( nums, n ) =>{
    //create a new arr
    let output = [];
    //create a var i to start at the beginning
    let i = 0;
    //The goal is the add 2 different values one at time
    //make a while loop to add both indexes into a new arr
    //while n is within bounds of nums array;
    while(n < nums.length){
        output.push(nums[i])
        output.push(nums[n])
        i++;
        n++
    }
    return output;
}
console.log(shuffle(nums2, n2));