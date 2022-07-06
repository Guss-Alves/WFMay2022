randomArr = [10,9,8,4,5,6,2];

function sorted(arr){
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j< arr.length; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}
console.log(sorted(randomArr))