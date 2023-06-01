/* 
Example 1:

Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation: 
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1). 
For nums[3]=2 there exist one smaller number than it (1). 
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

Example 2:

Input: nums = [6,5,4,8]
Output: [2,1,0,3]
*/
let nums1 = [8,1,2,2,3]; let nums2 = [6,5,4,8];

//our goal is to go through the array and find out how many smaller number there is 
var smallerNumbersThanCurrent = function(nums) {
    //we gonna need an array called 'output' to push the values we get
    let output = [];
    //we need a for loop i, to iterate through the array
    for(let i = 0; i < nums.length; i++){
        //we need a var called count, to keep track of the values, starting at 0
        let count = 0;
        //we need another for loop 'j', to go through the values nums[j]
        for(let j = 0; j < nums.length; j++){
            //then we need to have a if statement, if its smaller we add to count 
            if(nums[j] < nums[i]){
                count++;
            }
        }
        output.push(count);
    }
    return output;
};

console.log(smallerNumbersThanCurrent(nums2));