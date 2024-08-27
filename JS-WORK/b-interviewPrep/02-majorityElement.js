/*  169. Majority Element

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2

*/
let nums = [2,2,1,1,1,2,2];
let test = [1,1,1,2,2,3];

var majorityElement = function(nums) {
    // Initialize major and count to store the major and its frequency for respective iterations...
    let major = 0; count = 0;
    // For every element i in the array...
    for(let i = 0; i < nums.length; i++ ) {
        // If count is equal to zero, update major as major = nums[i]
        if(count == 0){
            major = nums[i];
            count = 1;
        }
        // If i is equal to candidate, increment count...
        else if(major == nums[i]){
            count++;
        }
        // Otherwise, decrement count...
        else{
            count--;
        }
    }
    // Return & print the major...
    return major;
};

console.log(majorityElement(te))