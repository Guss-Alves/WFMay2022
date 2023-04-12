//Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

//example 1
let nums1 = [1,3,5,6]; 
let target1 = 5;
// Output: 2

//example 2
let nums2 = [1,3,5,6]; 
let target2 = 2;
// Output: 1

//example 3
let nums3 = [1,3,5,6]; 
let target3 = 7;
// Output: 4

//Better solution from internet that covers every case
const searchInsertBetter = (nums, target)=>{
    for(let i = 0; i < nums.length; i++){
        if(nums[i] >= target){
            return i;
        }
    }
    return nums.length;
}
console.log(searchInsertBetter(nums3, target3));


//solution found by me, it covers the test cases, but it's not a final solution bc it doesn't cover every possible case
const searchInsert = (nums, target)=>{
    //first create a variable to keep track of the index
    let index = 0;
    //loop through the nums array 
    for(let i = 0; i < nums.length; i++){
        if(target === 0) return 0;
        //search for the target in the array
        if(nums[i] === target){
            return index;
        }
        index++;
    }
    let index2 = 0
    for(let j = 0; j < nums.length; j++){
        if(nums[j] === target - 1){
            return index2 + 1;
        }
        else if(nums[j] === target + 1){
            return index2;
        }
        index2++;
    }
}

// console.log(searchInsert(nums1, target1));