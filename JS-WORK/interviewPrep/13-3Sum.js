/* 
Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
*/

const nums1 = [-1, 0, 1, 2, -1, -4]; // Output: [[-1, -1, 2], [-1, 0, 1]]

function threeSum(nums) {
    const result = [];
    nums.sort((a, b) => a - b); // Sort the array in ascending order.
    console.log(nums);
    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
            let lo = i + 1;
            let hi = nums.length - 1;
            const target = -nums[i];
            console.log("here", target);
            while (lo < hi) {
                if (nums[lo] + nums[hi] === target) {
                    result.push([nums[i], nums[lo], nums[hi]]);
                    while (lo < hi && nums[lo] === nums[lo + 1]) lo++;
                    while (lo < hi && nums[hi] === nums[hi - 1]) hi--;
                    lo++;
                    hi--;
                } else if (nums[lo] + nums[hi] < target) {
                    lo++;
                } else {
                    hi--;
                }
            }
        }
    }

    return result;
}

console.log(threeSum(nums1)); 
;