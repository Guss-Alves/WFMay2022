/* 
Given by Riot games.
*/

const str1 = "b70a164c32a20c10";

/**

b 70 = 70
a 164 + 20 = 184

c 32 + 10 = 42


a184b70c42
 */




const expected1 = "a184b70c42";

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
function rehash(str){
    let obj = {};
    let recentChar = "";
    let numStr = "";
    for(let char of str){
        //check if char is a letter.
        if(isNaN(char)){
            //if numStr is not empty, add the num to obj[recentChar];
            if(numStr.length >0){
                obj[recentChar] += parseInt(numStr);
            }
            //set recentChar to be char, numStr to be empty
            recentChar = char;
            numStr = "";
            //if obj doesnt have the char, add that char as a key to the object set it at 0 if key doesnt exist yet, otherwise do nothing to object
            if(obj[char] === undefined){
                obj[char] = 0
            }

        }else{
            //if char is a number then append to our numStr
            numStr+=char;
        }
        
    }

    obj[recentChar] += parseInt(numStr);

    let keys = Object.keys(obj);
    keys.sort((a,b)=>{
        if(a>b){
            return 1
        }
        if(b>a){
            return -1
        }
        return 0;
    })
    result = "";
    for(const key of keys){
        result+= key + obj[key]
    }
    return result;
}
console.log(rehash(str1))