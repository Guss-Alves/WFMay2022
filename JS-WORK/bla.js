// var arr = [ [1,2,3],
//             [4,5,6] ];
            
// console.log(arr[0][2]);

// function flatten(arr){
//     var flat = [];
//     flat = (arr.flat());
//     return flat;
// }
// var result = flatten([ [1,2,3], [4,5,6] ] );
// console.log(result);

// function sumarr(arr){
//     var a = 0;
//     for (var i = 0; i < arr.length; i++){
//         a += arr[i];
//     }
//     console.log(a);
// }
// sumarr([20,30]);
function bubbleSort(arr){
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr.length - 1; j++){
            if(arr[j] > arr[j + 1]){
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
}
bubbleSort([3,2,1,5,4,7,6]);