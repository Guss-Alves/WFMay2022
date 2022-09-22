var isValid = function(s) {

    let bracket = {
        '(':')',
        '[':']',
        '{':'}'
    }

    let result = [];

    for( let char of s){
        if(bracket[char]){
            result.push(bracket[char])
        }else{
            if(result.pop() !== char) return false
        }
    }
    return (!result.length);
};
console.log(isValid(""))