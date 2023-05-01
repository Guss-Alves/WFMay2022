

const longestCommonPrefix = (word)=> {
    let prefix = '';
    //if array is empty we can already return nothing;
    if(word.length === 0){
        return prefix;
    }

    //loop through characters
    for(let i = 0; i < word[0].length; i++){
        const character = word[0][i]
        // console.log(word.length);
        //Now we loop through the other words, and check if its different from charaters of the word at index 0
        for(let j = 1; j < word.length; j++){
            if( word[j][i] !== character ){
                return prefix
            }
        }
        //If we get here it means the characters match, so we add to the variable 'prefix'
        prefix = prefix + character;
    }
    return prefix;
};

array = ["flower","flow","flight"]

console.log(longestCommonPrefix(array));