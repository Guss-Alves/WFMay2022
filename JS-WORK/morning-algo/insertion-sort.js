//https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/


//Create a function that will accept an array as an input, and it will return the sorted version of that array using the Insertion Sort approach
function insertionSort(arr){
    for(var i=1; i<arr.length;i++){
        while(arr[i]< arr[i-1]){
            [arr[i],arr[i-1]]=[arr[i-1],arr[i]];
            i--
        }
    }
    return arr
}
console.log(insertionSort([10,9,8,7,6,5,4,3]))