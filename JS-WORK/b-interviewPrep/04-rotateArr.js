/*  189. Rotate Array

Example 1:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
*/
/*          BRAINSTORM
    [1,2,3,4,5,6,7]
    lastElement gets deleted, and then gets added to the beginning right after
    and the loop goes on just k times

*/

let nums1 = [1,2,3,4,5,6,7];// [5,6,7,1,2,3,4]
let k1 = 3;

var rotate = function(nums, k) {
    for(let i = 0; i < k; i++){
        let lastElement  = nums.pop();
        console.log(lastElement);
        nums.unshift(lastElement);
    }
    return nums
};

console.log(rotate(nums1, k1))