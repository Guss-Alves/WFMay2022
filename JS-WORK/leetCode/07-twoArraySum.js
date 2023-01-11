//sum the total of 2 arrays
const sum1 = [5, 5, 10, 10];
const sum2 = [20,15, 5];

const sumArrays = (arr1, arr2) =>{
    //I want the two separate arrays to become just one
    for(let i = 0; i < arr2.length; i++){
        arr1.push(arr2[i]);
    }
    //once all the elements are in 1 array, I will make the sum
    let result = 0;
    for(let j = 0; j < arr1.length; j++){
        result += arr1[j];
    }
    return result;
}

console.log(sumArrays(sum1, sum2));