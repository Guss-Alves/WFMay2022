//No duplicates
//example 1
nums1 = [1, 1, 2];
// output = 2 which is the number of elements present in the array , nums = [ 1, 2 ];
//exemple 2
nums2 = [0,0,1,1,1,2,2,3,3,4];

//the idea here is that the array will always be in sorted order

var removeDuplicates = function(nums){
    //new array to push without duplicates
    let newArr = [];
    for(let i = 0; i < nums.length; i++){
    //so we will grab always the last duplicate in the array
    if(nums[i] !== nums[i + 1]){
        //once nums[i] is not the same value as the next num we push to new array
        newArr.push(nums[i]);
    }
    }
    return newArr;
}
// console.log(removeDuplicates(nums2))

// --------------------------------------------------------------------------------------------------------------------

//Sum of nested arrays
//we need to return the sum of everything, with only one array, or with as many arrays we get 
function sumOfNestedArrays(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        if(Array.isArray(array[i])){
            sum+= sumOfNestedArrays(array[i]);
        }else{
            sum+= array[i];
        }
    }
    return sum;
}
// console.log(sumOfNestedArrays([1, 2, 3, 4, 5])) // returns 15
console.log(sumOfNestedArrays([1, 2, 3, 4, [1, 1, 2]])) // returns 14
// console.log(sumOfNestedArrays([[1, 2], [3, 4], [5, 6], [7, 8]])) // returns 36
console.log(sumOfNestedArrays([1, [1, 2, 3], [7, [5, 4, 1]], [21, -7, 1], [1, 13, 131]])) // returns 184