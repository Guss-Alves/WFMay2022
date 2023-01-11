//sum the elements of an array
const sum = [5, 5, 10, 10];

const sumTotal = (arr) =>{
    let index = 0;
    for(let i = 0; i < arr.length; i++){
        // console.log(arr[i]);
        index += arr[i];
    }
    return index;
}

console.log(sumTotal(sum));