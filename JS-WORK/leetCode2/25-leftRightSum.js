/* 
example 1 
Input: nums = [10, 4, 8, 3]
Output: [15,1,11,22]
Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].
*/
let nums1 = [10, 4, 8, 3];
// leftSum is [0,10,14,22]
const leftRightDifference = (nums) => {
        const totalSum = nums.reduce((acc, num) => acc + num, 0);

        const res = [];
        let leftSum = 0;
        for (const num of nums) {
            res.push(Math.abs(totalSum - num - 2 * leftSum));
            leftSum += num;
        }

        return res;
    };
console.log(leftRightDifference(nums1));