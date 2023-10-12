//Example 1:
let ransomNote1 = "a"; let magazine1 = "b"; //Output: false

//Example 2:
let ransomNote2 = "aa"; let magazine2 = "ab"; //Output: false

//Example 3:
let ransomNote3 = "aa"; let magazine3 = "aab"; //Output: true

var canConstruct = function (ransomNote, magazine) {
    for (const char of magazine) {
        ransomNote = ransomNote.replace(char, "");
    }

    if (!ransomNote) return true;
    else return false;
};
console.log(canConstruct(ransomNote1, magazine1));