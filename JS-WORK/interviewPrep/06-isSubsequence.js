/*  392. Is Subsequence

Example 1:
Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:
Input: s = "axc", t = "ahbgdc"
Output: false
*/

let s1 = "abc"; let t1 = "ahbgdc"; //true
let s2 = "acb"; let t2 = "ahbgdc";//false


const isSubsequence = (s, t)=>{
    //brainstorm
        //.we will have 3 variables, i , j and count all starting at 0
        let i = 0; let j = 0; let count = 0
        //.I will do a while loop, while j is within bounds
        while(j < t.length){
            //.if s[i] === t[j] we do count++, i++, j++
            if(s[i] === t[j]){
                count++;
                i++;
                j++;
            }else{
                //.if s[i] !== t[j] we do j++
                j++;
            }
        }
        //.after the while loop is done we check for count.length, if it matches s.length we know its true
        if(count == s.length){
            return true;
        }else {
            return false;
        }
}
console.log(isSubsequence(s2,t1));