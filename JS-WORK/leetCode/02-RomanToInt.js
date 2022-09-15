/**
 * @param {string} s
 * @return {number}
 */
    var romanToInt = function(s) {
        const key = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000,}
        let result = [];

        for(let i = 0; i < s.length; i++){
            if(key[s[i]] < key[s[i+1]]){
                //subtract the values
                result.push(key[s[i+1]] - key[s[i]]);
                i++;
                continue;
            }else{
                //add to the array
                result.push(key[s[i]]);
            }
        }
        return result.reduce((total, currentValue) => total + currentValue);

};
console.log(romanToInt("IV"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));