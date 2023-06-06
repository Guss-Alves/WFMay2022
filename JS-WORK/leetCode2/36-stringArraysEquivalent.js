/* 
example 1 
Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.

example 2
Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
Output: false
 */

let word11 = ["ab", "c"]; let word22 = ["a", "bc"];
let word3 = ["a", "cb"]; let word4 = ["ab", "c"];

var arrayStringsAreEqual = function(word1, word2) {
    //our goal is to join the string of each word array
    let firstWordJoined = word1.join("");
    let secondWordJoined = word2.join("");
    //then compare it to each other
    //return true if they are the same
    if(firstWordJoined == secondWordJoined) return true;
    //false otherwise
    return false;
};
console.log(arrayStringsAreEqual(word3, word4));