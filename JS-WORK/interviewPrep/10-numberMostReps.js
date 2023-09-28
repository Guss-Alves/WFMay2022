// Algo that I thought 

//brainstorm
/* 
    [1,2,1,0,2,1]
    i     j
    tempCount = 1
    count = 2
    result = 1
    */

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 1, 0, 2, 1, 2, 2];
let arr3 = [1, 1, 1];

const mostReps = (arr) => {
    //we will have 3 var, count, tempCount and resut
    let count = 0; 
    let result = 0;
    //we gonna make a double loop
    for(let i = 0; i < arr.length; i++){
        let tempCount = 0;
        for(let j = i+1; j < arr.length; j++){
            //if i and j are equal we make tempCount++
            if(arr[i] == arr[j]){
                tempCount++
            }
            //if tempCount becomer greater than Count we set result = arr[i]
            if(tempCount > count){
                count = tempCount;
                result = arr[i];
            }
        }
    }
    // if(count = 0){
    //     result = 0;
    // }
    return result;
}
console.log(mostReps(arr3));