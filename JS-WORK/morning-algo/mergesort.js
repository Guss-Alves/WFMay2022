// merge
const sortedA1 = [];
const sortedB1 = [];
const expectedMerge1 = [];

const sortedA2 = [5];
const sortedB2 = [2];
const expectedMerge2 = [2, 5];

const sortedA3 = [3];
const sortedB3 = [2, 3, 4, 7];
const expectedMerge3 = [2, 3, 3, 4, 7];

const sortedA4 = [1, 2, 4, 5, 6, 9];
const sortedB4 = [3, 7, 8, 10];


// [1,2,3,4]
const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// create empty array for the result
// track of index of the first array and the second 
// index1[0], index2[0] 
// while we are in-bound in two arrays we well repeatedly do same process
//compare the two index values put the smallest value in the result array
// increment the index of the array that had the smaller value
function merge(arry1, arry2) {
    let result = [];
    let index1 = 0;
    let index2 = 0;
    while (index1 < arry1.length && index2 < arry2.length) {
        if (arry1[index1] < arry2[index2]) {
            result.push(arry1[index1]);
            index1++;
        }
        else {
            result.push(arry2[index2]);
            index2++;
        }
    }
    while (index2 < arry2.length) {
        result.push(arry2[index2]);


        index2++;
    }
    while (index1 < arry1.length) {
        result.push(arry1[index1]);
        index1++;
    }
    return result;
}

//https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
function mergeSort(arr) {
    //hint: look at the slice method to help you break down this array into halves
    //hint: see if you can use recursion with this
    // break this array into half
    while (arr.length > 1) {
        let mid = Math.floor(arr.length/2)
        // console.log(mid)
        let leftHalf = arr.slice(0, mid)
        // console.log(leftHalf)
        let rightHalf = arr.slice(mid, arr.length)
        // console.log(rightHalf)
        let left = mergeSort(leftHalf)
        let right = mergeSort(rightHalf)
        // console.log(left)
        // console.log(right)
        return merge(left, right)
    }
    return arr
}


console.log(mergeSort([6, 3, 8, 5, 1, 2, 9]))
