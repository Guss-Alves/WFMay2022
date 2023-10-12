//Example 1:
let ransomNote1 = "a"; let magazine1 = "b"; //Output: false

//Example 2:
let ransomNote2 = "aa"; let magazine2 = "ab"; //Output: false

//Example 3:
let ransomNote3 = "abcabcdd"; let magazine3 = "ddcbacba"; //Output: true

//both ways work
//this one uses different for loop
var canConstruct1 = function (ransomNote, magazine) {
    for (const char of magazine) {
        console.log(char);
        ransomNote = ransomNote.replace(char, "");
        console.log(ransomNote);
    }

    if (!ransomNote) return true;
    else return false;
};
console.log(canConstruct1(ransomNote3, magazine3));

//this one uses classic for loop
var canConstruct2 = function (ransomNote, magazine) {
    for(let i = 0; i < magazine.length; i++){
        ransomNote = ransomNote.replace(magazine[i], "");
    }

    if (!ransomNote) return true;
    else return false;
};
console.log(canConstruct2(ransomNote3, magazine3));