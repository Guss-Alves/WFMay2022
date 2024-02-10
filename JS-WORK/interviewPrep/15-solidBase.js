
let arr1 = [0,10,20,30,40,50];
let arr2 = [0,20,30,50,-1,-30,100,40,10];

const reviewBase = (array)=>{
    for(let i = 0; i < array.length; i++){
        console.log(array[i])
    }
}

const sortArr = (arr)=>{
    arr.sort((a, b) => a -b)
    console.log(arr);
}

// console.log(reviewBase(arr1));
console.log(sortArr(arr2));