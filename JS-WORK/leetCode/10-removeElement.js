
nums1 = [3,2,2,3];
val1 = 3
//output =  k = 2 [ 2, 2 ]

nums2 = [0,1,2,2,3,0,4,2];
val2 = 2
//output =  k = 5 [0,1,4,0,3]

var removeElement = function(nums, val){
    //lets loop through the array num
    for(let i = 0; i < nums.length; i++){
        //lets search for elements === val
        if(nums[i] === val){
            //if we find e === val, we have to remove from the array
            nums.splice(i, 1);
            i--
        }
    }
    //also return the number of indexes on var called "k"
    const k = nums.length;
    console.log(k)
    return nums;
}

// console.log(removeElement(nums2, val2));


//different approach

var removeElement = function(nums, val){
    //create var index start at 0
    let index = 0;
    //loop through nums
    for(let i = 0; i < nums.length; i++){
        //if current i !== val
        if(nums[i] !== val){
            //set nums[index] == nums[i]
            nums[index] = nums[i];
            //increment index
            index++;
        }
    }
    //return index
    return index;
}
console.log(removeElement(nums2, val2));
