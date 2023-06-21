/* 
Example 1:
Input: nums = [1,2,3,4,5], k = 3
Output: 18
Explanation: We need to choose exactly 3 elements from nums to maximize the sum.
For the first iteration, we choose 5. Then sum is 5 and nums = [1,2,3,4,6]
For the second iteration, we choose 6. Then sum is 5 + 6 and nums = [1,2,3,4,7]
For the third iteration, we choose 7. Then sum is 5 + 6 + 7 = 18 and nums = [1,2,3,4,8]
So, we will return 18.
It can be proven, that 18 is the maximum answer that we can achieve.

example 2:
Input: nums = [5,5,5], k = 2
Output: 11
Explanation: We need to choose exactly 2 elements from nums to maximize the sum.
For the first iteration, we choose 5. Then sum is 5 and nums = [5,5,6]
For the second iteration, we choose 6. Then sum is 5 + 6 = 11 and nums = [5,5,7]
So, we will return 11.
It can be proven, that 11 is the maximum answer that we can achieve.
 */

let nums1 = [4,4,9,10,10,9,3,8,4,2,5,3,8,6,1,10,4,5,3,2,3,9,5,7,10,4,9,10,1,10,4]; let k1 = 6;
//Output: 75

let nums2 = [5,5,5]; let k2 = 2;
//Output: 11


var maximizeSum = function(nums, k) {
//first lets sort the array
for(let i = 0; i < nums.length; i++){
    for(let j = i + 1; j < nums.length; j++){
        if(nums[i] > nums[j]){
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }
}
//now we can get the sorted array and make the sum
//and create var output;
let output = nums[nums.length - 1];
for(let x = 1; x < k; x++){
    nums[nums.length - 1] = nums[nums.length - 1] + 1;
    output+= nums[nums.length - 1];
}
return output;
};
console.log(maximizeSum(nums1, k1));