/* 
Example 1:
Input: nums = [5,6,2,7,4]
Output: 34
Explanation: We can choose indices 1 and 3 for the first pair (6, 7) and indices 2 and 4 for the second pair (2, 4).
The product difference is (6 * 7) - (2 * 4) = 34.

Example 2:
Input: nums = [4,2,5,9,7,4,8]
Output: 64
Explanation: We can choose indices 3 and 6 for the first pair (9, 8) and indices 1 and 5 for the second pair (2, 4).
The product difference is (9 * 8) - (2 * 4) = 64.
*/
//the idea is to get the biggest value pair, as well as the smallest value pair
//the difference is gonna be calculated by multiplying both pairs, and getting the difference between them

let nums1 = [5,6,2,7,4];
var maxProductDifference = function(nums) {
    nums.sort((a, b) => a -b);
    let small1 = nums[0]; let small2 = nums[1];
    let biggest1 = nums[nums.length - 1]; let biggest2 = nums[nums.length - 2];

    let difference = Math.abs((small1 * small2) - (biggest1 * biggest2));
    
    return difference;
};
console.log(maxProductDifference(nums1))