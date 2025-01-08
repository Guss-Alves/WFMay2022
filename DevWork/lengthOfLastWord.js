/**
 * @param {string} s
 * @return {number}
 */

let s1 = "Hello World";
let s2 = "   fly me   to   the moon  ";
let s3 = "luffy is still joyboy";
let s4 = "a";

var lengthOfLastWord = function(s) {
    //first we need to make sure there is no spaces in the end
    const trimmedString = s.trimEnd();
    //we can create a variable called count to keep track of the length
    let count = 0;
    //then we can loop while the value is not " "
    let i = trimmedString.length -1;
    while(trimmedString[i] !== " "){
        count++;
        i--;
        if(i == -1){
            return count;
        }
    }
    return count;
};

console.log(lengthOfLastWord(s2));