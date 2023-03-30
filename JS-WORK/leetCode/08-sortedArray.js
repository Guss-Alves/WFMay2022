//sort an array of nums 
array = [10, 29, 17, 1000, 700, 77, 76];

const sortArray = (arr)=>{
    //I gonna loop through the array
    for(let i = 0; i < arr.length ; i++){
        //now lets make an new loop to check the next number of i
        for(let j = i + 1; j < arr.length; j++ ){
            //now lets check if the num[i] its lower or bigger than num[j], if its bigger we change position, if its lower we keep going
            if(arr[i] > arr[j]){
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}

console.log(sortArray(array));