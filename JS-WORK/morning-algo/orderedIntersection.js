const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

//THIS IS A SOLUTION i CAME UP ON MY OWN, BUT IS SLOW, BEST SOLUTION(MORE EFFECIENT) IS IN ./intersection.js
const orderedIntersection = (arr1, arr2) =>{
const result = [];
//check if the first array elements it's equal to the second array element and keep going
for(i = 0; i < arr1.length; i++){
    for(j = 0; j < arr2.length; j++){
        if(arr1[i] == arr2[j]){
            result.push(arr1[i])
        }
    }
}
//with new Set you can remove the duplicates automatically
let uniqueValues = [...new Set(result)];
// console.log(result);
return uniqueValues;

}

console.log(orderedIntersection(numsA1, numsB1));