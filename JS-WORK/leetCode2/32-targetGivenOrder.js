/* 
example 1:
Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
Output: [0,4,1,3,2]

example 2:
Input: nums = [1,2,3,4,0], index = [0,1,2,3,0]
Output: [0,1,2,3,4]

Example 3:
Input: nums = [1], index = [0]
Output: [1]
 */
// the goal is to insert the value of nums at the index of index in a new array
let nums1 = [0,1,2,3,4]; let index1 = [0,1,2,2,1]; // Output: [0,4,1,3,2]
let nums2 = [1,2,3,4,0]; let index2 = [0,1,2,3,0]; //Output: [0,1,2,3,4]

var createTargetArray = function(nums, index) {
    //we need an empty array called target 
    let target = [];
    let i = 0;
    let j = 0;
    while( i < nums.length){
        target.splice(index[j], 0, nums[i]);
        j++;
        i++;
    }
    return target;
};
console.log(createTargetArray(nums2, index2));
// let nums = [1,3,4];
// nums.splice(1, 0, 2);
// console.log(nums)