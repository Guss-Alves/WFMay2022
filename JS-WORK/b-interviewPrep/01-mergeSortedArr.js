/*  88. Merge Sorted Array

Example 1:
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

*/
nums1 = [1,2,3,0,0,0]; m = 3;
nums2 = [2,5,6]; n = 3;

// nums1 = [1], m = 1, nums2 = [], n = 0

var merge = ()=>{
    let finalArr = [];
    for(let j = 0; j < m; j++){
        finalArr.push(nums1[j]);
    }
    for(let i = 0; i < n; i++){
        finalArr.push(nums2[i]);
}
finalArr.sort((a,b) => a - b);
return finalArr;
}
console.log(merge(nums1, m, nums2, n));