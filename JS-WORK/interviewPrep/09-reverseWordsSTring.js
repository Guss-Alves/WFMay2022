/* brainstorm 

*/

let s1 = "the sky is blue" //"blue is sky the"
let s2 = "  hello world  " // "world hello"
let s3 = "a good   example" //Output: "example good a"

var reverseWords = function(s) {
    // Split the string into words
    let words = s.split(' ');
    // Filter out any empty words
    let nonEmptyWords = words.filter(word => word.trim() !== '');
      // Reverse the array of non-empty words
    let reversedWords = nonEmptyWords.reverse();

    return reversedWords.join(' ');
};
console.log(reverseWords(s3))