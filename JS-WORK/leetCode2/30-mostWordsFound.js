/* 
main example:
Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
Output: 6
Explanation: 
- The first sentence, "alice and bob love leetcode", has 5 words in total.
- The second sentence, "i think so too", has 4 words in total.
- The third sentence, "this is great thanks very much", has 6 words in total.
Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.
*/
let sentence1 = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];
let sentence2 = ["please wait", "continue to fight", "continue to win"]
// /Output: 6

var mostWordsFound = function(sentences) {
    //we need a var maxWords to keep track of the max words in a sentence
    let maxWords = 0;
    //we make a for loop with i
    for(let i = 0; i < sentences.length; i++){
        //we need a var spaceCount to keep track of how many spaces there is, starting at 1 bc words === spaces + 1;
        let spaceCount = 1;
        //we need a double for loop this time to go throught the strings 
        for(let j = 0; j < sentences[i].length; j++){
            //everytime the value is equal to " ", we add to spaceCounts
            if(sentences[i][j] === " "){
                spaceCount += 1;
            }
        }
        console.log(spaceCount);
        //once thats done we check if maxWords is less than spaceCounts, if so we make maxWords = spaceCounts;
        if(maxWords < spaceCount){
            maxWords = spaceCount;
        }
    }
    return maxWords;
}
console.log(mostWordsFound(sentence1));