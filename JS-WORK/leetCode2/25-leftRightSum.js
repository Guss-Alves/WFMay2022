/* 
example 1 
Input: nums = [10, 4, 8, 3]
Output: [15,1,11,22]
Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].
*/
let nums1 = [10, 4, 8, 3];
// leftSum is [0,10,14,22]
const leftRightDifference = (nums)=>{
    //lets find leftSum first
    let leftSum = [];
    //i starts at 0 and j = i - 1
    let i = 0; let j = i - 1;
    //we want to do a while loop as long i is within bounds
    while(i < nums.length){
        //we need a var totalSum to keep track of the sums
        let totalSum = 0;
        //if j its bigger than 0 we decrease and make sum(totalSum += nums[j])
        if(j >= 0){
            totalSum = totalSum + nums[j];
            console.log(totalSum);
            j--;
        }
        //when j gets to become less than 0 we push j to leftSum and increment i and set j back to original value
        if(j < 0){
            leftSum.push(totalSum);
            i++;
            j = i - 1;
        }
    }
    return leftSum
}
console.log(leftRightDifference(nums1));