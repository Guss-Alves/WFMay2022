function reverseString(str) {
    // Your code here
    let end = str.length - 1;
    let output = "";
    for(let i = 0; i < str.length; i++){
        // console.log(str[end]);
        output += str[end];
        end--;
    }
    return output;
}
// console.log(reverseString("hello")); // Expected Output: "olleh"
// console.log(reverseString("world")); // Expected Output: "dlrow"
// console.log(reverseString("JavaScript")); // Expected Output: "tpircSavaJ"


function sumArray(arr) {
    // Your code here
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total;
}

// console.log(sumArray([1, 2, 3, 4, 5])); // Expected Output: 15
// console.log(sumArray([10, -2, 3, 4, -5])); // Expected Output: 10
// console.log(sumArray([0, 0, 0, 0, 0])); // Expected Output: 0

function findMax(arr) {
    // Your code here
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

// console.log(findMax([1, 2, 3, 4, 5])); // Expected Output: 5
// console.log(findMax([-10, -2, -3, -4, -5])); // Expected Output: -2
// console.log(findMax([100, 50, 200, 150])); // Expected Output: 200

const isPrime = num =>{
    if(num <= 1) return false
    if(num === 2) return true
    
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false
        }
    }
    return true;
}
// Test cases
// console.log(isPrime(7));  // Expected Output: true
// console.log(isPrime(10)); // Expected Output: false
// console.log(isPrime(13)); // Expected Output: true

