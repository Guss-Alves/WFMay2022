/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //lets work with a while loop
    //2 variables, going through the arr
    let i = 0;
    let j = i + 1;
    let k = 0;
    while (j < nums.length){
        // and checking if they are equal
        if(nums[i] == nums[j]){
        //if so, lets remove the element from the array, leaving only unique number
            nums.splice(j, 1);
        }else{
            i++;
            j++;
        }
    }
    //and then returning the arr.length - 1 
    k = nums.length;
    return k;
};

let nums = [1,1,2];
let nums1 = [0,0,1,1,1,2,2,3,3,4];

console.log(removeDuplicates(nums1));