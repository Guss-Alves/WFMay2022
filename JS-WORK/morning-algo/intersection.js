/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.
  Output: only the shared values between the two arrays (deduped).
  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/


const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];
const expected3 = [];

/**
 * Efficiently combine the two sorted arrays into a new array that is the a
 * sorted set intersection.
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
function orderedIntersection(sortedA, sortedB) {
    //we will create 2 vars to itarate through the array(i,j), at 0
    let i = 0;
    let j = 0;
    //create a var for the result, empty arr []
    let newArr = [];
    //loop as long i and j are within bounds
    while(i<sortedA.length && j<sortedB.length){
        //compare elements at index i with j, to see if they are equal 
        if(sortedA[i] == sortedB[j]){
        // if they are equal check if the output already has that element, if doesn't then is okay to move to output 
            //if(!newArr.includes(sortedA[i])){
                //newArr.push(sortedA[i])
            //}
            if(newArr[newArr.length - 1] != sortedA[i]){
                newArr.push(sortedA[i])

            }
            //if there is no smaller element, increment both indexes
            i++;
            j++
        }
        else if(sortedA[i]<sortedB[j]){
            //if not qual, increment the array with the smaller element
            i++
        }
        else{
            j++;
        }
    }
    //return the results 
    return newArr;
}

const numsA1 = [0, 1, 2, 2, 2, 7];
//                       i
const numsB1 = [2, 2, 6, 6, 7];
//                 j
//[2]

const expected1 = [2, 7];
console.log(orderedIntersection(numsA1, numsB1));
