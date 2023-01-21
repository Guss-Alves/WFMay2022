
array = ["flower", "flow", "flight"]
output = "fl";

array2 = ["flower", "dog"]
//or empty string = "";

//GO OVER TO UNDERSTAND WHATS HAPPPENING HERE (should be level easys)
const commonPrefix = (strs) => {
    let prefix = "";
    if (strs.length == 0){
        return prefix
    } 
    //loop through characters
    for (let i = 0; i < strs[0].length; i++) {
        const character = strs[0][i];
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] != character){
                return prefix
            } 
        }
        prefix = prefix + character;
    }
    return prefix;
}

console.log(commonPrefix(array))