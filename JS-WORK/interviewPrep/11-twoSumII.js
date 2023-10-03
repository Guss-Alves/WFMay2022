// 167. Two Sum II - Input Array Is Sorted
/* 
Example 1:
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

Example 2:
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

Example 3:
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
*/

let numbers1 = [2,7,11,15]; target1 = 9; //Output: [1,2]
let numbers2 = [2,3,4]; target2 = 6; //Output: [1,3]
let numbers3 = [-1,0]; target3 = -1; //Output: [1,2]

const twoSum = (numbers, target)=>{
    //create an empty output array
    let output = [];
    //the easiest way is using a double loop to iaterate thru the array and check the elements
    for(let i = 0; i < numbers.length; i++){
        for(let j = i+1; j < numbers.length; j++){
            //when i + j is = target, we gonna make sure to push i and j to output array
            if(numbers[i] + numbers[j] === target){
                //remember that we need to add 1 to both indexes
                output.push(i+1, j+1);
                return output;
            }
        }
    }
    return output;
}
console.log(twoSum(numbers3, target3));
