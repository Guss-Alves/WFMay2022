// I already did this one, but I wanna try again since I forgot how to solve it 
/* 
Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/
let strs1 = ["flower", "flow", "flight"];
//            i                k 
//              j               x
// Output: "fl"

let strs2 = ["dog", "racecar", "car"];
//            i        k 
//            j        x
// Output: ""
//our goal is to check every string, and check if the values of all of them are the same



var longestCommonPrefix = function (strs) {
    //we need a var prefix were we will add the characters that are the same 
    let prefix = "";
    //we need 4 vars, 2 will always be checkig the first word , and the other 2 will run the array checking the characters
    let i = 0; let j = 0; let k = i + 1; let x = 0;
    //we need a while loop as long i is within bounds
    while (i < strs.length) {
        //we need to check if strs[i][j] is equal to strs[k][x]
        if(strs[i][j] == strs[k][x]){
            //we wanna incremenet strs[k]
            k++;
        }
        else{
            // prefix = "''";
            return prefix;
        }
        //if k gets to the end of the array we want to push strs[i][j] to var prefix, and increment j, x, and set k again to i + 1
        if(k >= strs.length){
            prefix += strs[i][j];
            // console.log(prefix);
            k = i + 1;
            j++;
            x++;
        }
        //else one of the words doesnt match so we will return prefix right away, and set i = strs. length to kill the loop
        
    }
};
console.log(longestCommonPrefix(strs1));