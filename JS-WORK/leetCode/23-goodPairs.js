/* 
example 1
Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

exapmple 2
Input: nums = [1,1,1,1]
               i     j
Output: 6
Explanation: Each pair in the array are good.

Example 3
Input: nums = [1,2,3]
Output: 0
*/

let nums1 = [1,2,3,1,1,3]
// Output: 4
let nums2 = [1,1,1,1]
// Output: 6
let nums3 = [1,2,3];

//our goal is to check how many pairs are in a array
var numIdenticalPairs = function(nums) {
    //we will have 2 vars i starting at 0 and j being one index in front (i + 1)
    let i = 0; let j = i + 1; 
    //we also gonna have a var count to keep track of how many pairs
    let count = 0;
    //we will have a while loop until i is out of bound
    while(i < nums.length){
        //if nums[i] == nums[j] we wanna add 1 to count and move j forward
        if(nums[i] == nums[j]){
            count += 1;
            j++;
        }
        //else we will just move j forward and not do anything
        else{
            j++;
        }
        //when j gets to the end of the array, we want increse i and set j again to i + 1
        if(j >= nums.length){
            i++;
            j = i + 1;
        }
    }
    return count
};
console.log(numIdenticalPairs(nums3))