/* 
Example 1:
Input: nums = [1,2,2,1], k = 1
Output: 4
Explanation: The pairs with an absolute difference of 1 are:
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]

Example 2:
Input: nums = [1,3], k = 3
Output: 0
Explanation: There are no pairs with an absolute difference of 3.

Example 3:
Input: nums = [3,2,1,5,4], k = 2
Output: 3
Explanation: The pairs with an absolute difference of 2 are:
- [3,2,1,5,4]
- [3,2,1,5,4]
- [3,2,1,5,4]
 */

let nums1 = [1,2,2,1]; let k1 = 1 //Output: 4
let nums2 = [1,3]; let k2 = 3; ////Output: 0
let nums3 = [3,2,1,5,4]; let k3 = 2; ////Output: 3

//In this challenge we want to check how many pairs with an abasolute difference of k we have in an array
var countKDifference = function(nums, k) {
    // console.log(Math.abs(nums[0] - nums[1]));
//we will have a var count, starting at 0 to keep track of the pairs
let count = 0;
//we will make a double for loop, the parent checking 1 value, while the child go through the rest of the array
for(let i = 0; i < nums.length; i++){
    for(let j = i + 1; j < nums.length; j++){
        //we will have a var called difference that will contain the difference between the 2 values got from the loops using Math.abs()
        let difference = Math.abs(nums[i] - nums[j]);
        //we will have a if statement checking if var difference is equal k
        if(difference === k){
            //if so we will increase var count
            count++;
        }
    }
}
return count;
};
console.log(countKDifference(nums3, k3));