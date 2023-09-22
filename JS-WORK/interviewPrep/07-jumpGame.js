/*                                               55. Jump Game
Example 1:
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:
Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

                                     M
                                 0 1 2 3 4 5 6 7 8 9
                                [1,1,2,5,2,1,0,0,1,3] true
                                   i
                                maxReach = 2
                                temp = i + nums[i] = 2

                                             M
                                 0 1 2 3 4 5 6 7 8 9
                                [1,1,2,3,2,1,0,0,1,3] false
                                             i
                                maxReach = 6
                                temp = 6
*/

let nums1 = [2,3,1,1,4]; //true
let nums2 = [3,2,1,0,4]; //false
let nums3 = [1,1,2,5,2,1,0,0,1,3] //true
let nums4 = [1,1,2,3,2,1,0,0,1,3] //false

var canJump = function(nums) {
    let reachable = 0
    for(let i = 0; i < nums.length; i++){
        if(reachable < i)return false;
            reachable = Math.max(reachable, i+nums[i]);
    }
    return true;
};
console.log(canJump(nums3));