// 1. Reverse a String

// Challenge:
// Write a function that takes a string as input and returns the string reversed.
function reverseString(str) {
    // Your code here
    //create a variable equal to the length of the array
    let end = str.length -1;
    // create var to store the reversed string
    let reversed = [];
    for(let j = end; j >= 0; j--){
        // console.log(str[j]);
        reversed.push(str[j]);
        // console.log(end);
    }
    return reversed.join("");
}
// console.log(reverseString("momo")); // Output: "olleh"



/*
2. Sum of Array Elements
Challenge:
Write a function that takes an array of numbers as input and returns the sum of all the elements in the array.

// Example:
*/
function sumArray(arr) {
    // Your code here
    //var to track the value
    let totalsum = 0;
    for(let i = 0; i < arr.length; i++){
        totalsum += arr[i];
    }
    return totalsum;
}

// console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15

/* 
3. Check for Palindrome
Challenge:
Write a function that takes a string as input and returns true if the string is a palindrome, and false otherwise. A palindrome is a word, phrase, or sequence that reads the same backward as forward (ignoring spaces and punctuation).
Example:
*/
/*
i
madam
    j
*/

function isPalindrome(str) {
    // Your code here
    let j = str.length - 1;
    let i = 0;
    while(j >= 0){
        if(str[j] == str[i]){
            j--;
            i++;
        }
        if(str[j] !== str[i]){
            return false
        }
        
    }
    return true;
}

console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false
