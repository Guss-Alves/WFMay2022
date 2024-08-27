/* brainstorm 
    Had to take a deeper look to understand how all the methods are working in the algo
*/

let s1 = "the sky is blue" //"blue is sky the"
let s2 = "  hello world  " // "world hello"
let s3 = "a good   example" //Output: "example good a"

//My version doing slowly and understanding whats happening on each line
var reverseWords = function(s) {
    // Split the string into words
    let words = s.split(' ');
    // // Filter out any empty words
    let realWords = words.filter(word => word.trim() !== '');
    //   // Reverse the array of non-empty words
    let reverseWords = realWords.reverse();
    //join both string with a space between
    reverseWords = reverseWords.join(' ');
    return reverseWords;
    
};
console.log(reverseWords(s2))


//version with IA
// var reverseWords = function(s) {
//     // Split the string into words
//     let words = s.split(' ');
//     // Filter out any empty words
//     let nonEmptyWords = words.filter(word => word.trim() !== '');
//       // Reverse the array of non-empty words
//     let reversedWords = nonEmptyWords.reverse();

//     return reversedWords.join(' ');
// };