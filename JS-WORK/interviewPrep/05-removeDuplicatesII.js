/*  remove duplicates from sorted array 

Example 1:
Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:
Input: nums = [0,0,1,1,1,1,2,3,3]
Output: 7, nums = [0,0,1,1,2,3,3,_,_]
Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/
/* 
    BRAINSTORM
    the idea is to remove the duplciates where it repeats 2 time at most
    we will return k which is just the length of final array
    we can have an if statement that says if j+1 === i it means theres more than 3 element then we can remove it

    nums = [0,0,1,1,1,2,3,3]
                i   j

*/

let nums1 = [1,1,1,2,2,3]; //5
let nums2 = [0,0,1,1,1,1,2,3,3]; //7 [0,0,1,1,2,3,3,_,_]
let nums3 = [1,1,1,1]; //2 [1,1]

//better approach using while loop, I should start using more since I have a better control like that
var removeDuplicates = function(nums) {
    let k = nums.length
    let l = 0;
    let mid = 1;
    let r = 2;

    while(r<nums.length){
        if(nums[l] === nums[mid] && nums[r] === nums[mid]){
            nums[r] = "_";
            k--;
            r++;
        } else if (nums[l] === nums[mid] && nums[mid]!==nums[r]){
            l = r;
            mid = l + 1;
            r = mid + 1;
        } else {
            l++;
            mid++;
            r++
        }
    }
    let i = 0;
    let j = 1;

    while(j < nums.length){
        if(nums[i] === "_" && nums[j]!== "_"){
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
            j++;
        } else if (nums[i] === "_" && nums[j] === "_"){
            j++;
        } else {
            i++;
            j++;
        }
    }
    console.log(nums);
    return k;
};
console.log(removeDuplicates(nums2));


// var removeDuplicates = function(nums) {
//     let k = 0
//     // console.log(nums);
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i + 1; j < nums.length; j++){
//             if(nums[i] === nums[j+1]){
//                 nums.splice(j, 1);
//                 if(i > 0 || nums.length == 3){
//                     // console.log('say ho yeah')
//                     i--;
//                 }
//             }
//         }
//     }
//     k = nums.length;
//     console.log(nums);
//     return k;
// };