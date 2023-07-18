/* 
Example 1:
Input: words = ["cd","ac","dc","ca","zz"]
Output: 2
Explanation: In this example, we can form 2 pair of strings in the following way:
- We pair the 0th string with the 2nd string, as the reversed string of word[0] is "dc" and is equal to words[2].
- We pair the 1st string with the 3rd string, as the reversed string of word[1] is "ca" and is equal to words[3].
It can be proven that 2 is the maximum number of pairs that can be formed.

Example 2:
Input: words = ["ab","ba","cc"]
Output: 1
Explanation: In this example, we can form 1 pair of strings in the following way:
- We pair the 0th string with the 1st string, as the reversed string of words[1] is "ab" and is equal to words[0].
It can be proven that 1 is the maximum number of pairs that can be formed.
*/
let words1 = ["cd", "ac", "dc", "ca", "zz"]; //Output: 2

const maximumNumberOfStringPairs = (words) => {
    let count = 0;

    for(let i = 0; i < words.length; i++){
        for(let j = i + 1; j < words.length; j++){
            if(words[i][0] == words[j][1]){
                if(words[i][1] == words[j][0]){
                    count++;
                }
            }
        }
    }
    return count;
}
console.log(maximumNumberOfStringPairs(words1))
