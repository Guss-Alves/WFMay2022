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

console.log(reverseString("bebe")); // Output: "olleh"
