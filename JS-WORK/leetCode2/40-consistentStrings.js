/* 
Example 1:
Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
Output: 2
Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

example 2:
Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
Output: 7
Explanation: All strings are consistent.
 */
//                                                         i
let allowed1 = "ab"; let words1 = ["ad","bd","aaab","baa","badab"]; //Output: 2
//                                                         j
let allowed2 = "abc"; let words2 = ["a","b","c","ab","ac","bc","abc"]; //Output: 7

//got somewhere but not correctly
// var countConsistentStrings = function(allowed, words) {
//     //Our goal is pretty much check if the string has a letter that is not allowed
//     //lets have a var count to keep track of how many words match what we want, plus var i and j to go through the array
//     let count = 0; let i = 0; let j = 0;
//     //lets make a while loop until words array is within bounds
//     while(i < words.length){
//         //if words[i][j] doesnt includes on the array allowed we move i and set j to 0
//         if(!allowed.includes(words[i][j])){
//             i++;
//             j = 0;
//         }
//         //if words[i][j] includes on the array allowed we move j
//         if(allowed.includes(words[i][j])){
//             if(j = words[i].length - 1){
//                 count+= 1;
//                 i++;
//                 j = 0
//             }
//             j++
//         }
//     }
//     return count;
// };
// console.log(countConsistentStrings(allowed2, words2));

var countConsistentStrings = function(allowed, words) {
    let res = 0;
    allowed = new Set(allowed);

    for(let word of words)
        res+= isAllowed(word);

    return res;

    function isAllowed(word){
        for(let char of word)
            if(!allowed.has(char))
                return false;
            return true;
    }
};
console.log(countConsistentStrings(allowed1, words1));