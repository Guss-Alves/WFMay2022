/* 
example 1
Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1]

example 2
Input: nums = [1,3,2,1]
Output: [1,3,2,1,1,3,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
- ans = [1,3,2,1,1,3,2,1]
*/
let nums1 = [1,2,1]
let nums2 = [1,3,2,1]

//The goal is create a variable called "ans" which will repeat 2 time whatever have inside the array nums
var getConcatenation = function(nums) {
    primeLength = nums.length;
    for(let i = 0; i < primeLength; i++){
        nums.push(nums[i]);
    }
    let ans = nums;
    return ans;
};
console.log(getConcatenation(nums2));