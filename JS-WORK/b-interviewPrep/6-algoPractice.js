//2Sum
//Here we want to add 2 number together so we can find var target
//simple solution by looping thought the array, and if we hit the target we push both indexes

var twoSum = function(nums, target) {
let result = [];
//for loop with i
for(let i = 0; i < nums.length; i++){
    //double foor loop with j
    for(let j = i + 1; j < nums.length; j++){
        //if values add to target make push
        if(nums[i] + nums[j] == target){
            result.push(i);
            result.push(j);
        }
    }
}
return result;
};
console.log(twoSum([3,5,6,15], 9))