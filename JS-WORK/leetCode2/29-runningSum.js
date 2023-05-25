/* 
Example 1:
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

example 2
Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

Example 3:
Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
*/
let nums1 = [1, 2, 3, 4];  //[1,3,6,10]
let nums2 = [1, 1, 1, 1, 1]; //[1,2,3,4,5]
let nums3 = [3, 1, 2, 10, 1] //[3,4,6,16,17]

var runningSum = function (nums) {
    //we need a var output where we will push the sums
    let output = [];
    //we need a var count to keep track of the sums
    let count = 0;
    //we do a for loop and in each iteration we add nums[i] to count
    for(let i = 0; i < nums.length; i++){
        count += nums[i];
        //then we push to output 
        output.push(count);
    }
    //and finally return output at the end
    return output;
};
console.log(runningSum(nums3));