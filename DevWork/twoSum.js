let arr1 = [1,5,8,10,3];

var twoSum = function(nums, target) {
    //variable to store result
    let result = [];
    //we want to loop through the array and make the calculation
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                result.push(i,j);
                return result;
            }
        }
    }
};