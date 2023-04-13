/*
example 1
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
//example 2
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
//example 2
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
*/
let s1 = "Hello World";
let s2 = "   fly me   to   the moon  ";
let s3 = "luffy is still joyboy";
//                           i
//                            c
const lengthOfLastWord = (s)=>{
    let count = 0;
    for(let i = s.length - 1 ; i >= 0; i--){
        if(s[i] !== " "){
            for(let j = i; j >= 0; j--){
                if(s[j] !== " "){
                    count++
                }else{
                    return count;
                }
            }
            return count;
        }
    }
}
console.log(lengthOfLastWord(s2));