/* 
example 1 
Input: nums = [0,2,1,5,3,4]
Output: [0,1,2,4,5,3]
Explanation: The array ans is built as follows: 
ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
    = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]
    = [0,1,2,4,5,3]

    example 2 
    Input: nums = [5,0,1,2,3,4]
Output: [4,5,0,1,2,3]
Explanation: The array ans is built as follows:
ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
    = [nums[5], nums[0], nums[1], nums[2], nums[3], nums[4]]
    = [4,5,0,1,2,3]
*/
//the goal is create a new array where the value will be defined by the index of same number of the first array

let nums1 = [0,2,1,5,3,4]
//Output: [0,1,2,4,5,3]

const buildArray = (nums)=>{
    let ans = []
    //make a loop to go through the first array
    for(let i = 0; i < nums.length; i++){
        ans.push(nums[nums[i]]);
    }
    return ans;
}

console.log(buildArray(nums1))

