/* 
  Given an array of ints, find all the non-consecutive integers
  A number is non-consecutive if it is NOT exactly 1 larger than the previous element.
  The first element is never considered non-consecutive.
  Return an array of objects where each object contains the number itself
  and it's index.
*/

const nums1 = [1, 2, 3, 4, 6, 7, 8, 10];
const expected1 = [
    { i: 4, n: 6 },
    { i: 7, n: 10 },
];

const nums2 = [];
const expected2 = [];

const nums3 = [1, 3, 7, 9];
const expected3 = [
    { i: 1, n: 3 },
    { i: 2, n: 7 },
    { i: 3, n: 9 },
];
// Explanation: Index 0 has no number before it, so it is not included.

/**
 * Finds all the non-consecutive (out of order) numbers from the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @typedef {Array<{i: number, n: number}>} NonConsecNums Array of objects.
 * @property {number} i The index of the non consecutive number.
 * @property {number} n The non consecutive number itself.
 * @returns {NonConsecNums}
 */
//  const nums1 = [1, 2, 3, 4, 6, 7, 8, 10];

//make a loop that will iterate through the array, and check if it's consecutive
//create an obj, with keys of index and number(value)
//add to the obj if its not consecutive from the number behind
const NonConsecNums2 = () =>{
    let result = [];
    for(i = 1; i < nums3.length ; i++){
        if(nums3[i] != nums3[i - 1] + 1){
            let obj = {};
            obj['i'] = i;
            obj['n'] = nums3[i];
            result.push(obj);
        }
        // console.log(nums1[i]);
    }
    return result;
}

console.log(NonConsecNums2());