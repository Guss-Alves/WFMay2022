var twoSum = function(nums, target) {
    const results = [];

    for(let i = 0; i < nums.length; i++){
        let temp = i;

        for(let j = temp + 1; j < nums.length; j++){
            if(nums[i] + nums[j] == target) {
                results.push(i);
                results.push(j);
            }
        }
    }
    return results;
};
console.log(twoSum([2,7,11,15], 26));