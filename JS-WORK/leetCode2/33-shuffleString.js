/* 
example 1:
                            //  " c o d e l e e t"
Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
                            Output: "leetcode"
Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

example 2:
Input: s = "abc", indices = [0,1,2]
Output: "abc"
Explanation: After shuffling, each character remains in its position.
*/
let s1 = "codeleet"; let indices1 = [4, 5, 6, 7, 0, 2, 1, 3]; //Output: "leetcode"
let s2 = "abc"; let indices2 = [0, 1, 2];  //Output: "abc"

var restoreString = function (s, indices) {
    //we want to create a string called output
    let output = [];
    // we want to loop through indices and push what corespond in s
    for(let i = 0; i < indices.length; i++){
        output[indices[i]] = s.charAt(i);
    }
    return output.join("");
};
console.log(restoreString(s1, indices1))