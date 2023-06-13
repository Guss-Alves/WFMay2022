/* 
Example 1:
Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], 
ruleKey = "color", ruleValue = "silver"
Output: 1
Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].

example 2
Input: items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], 
ruleKey = "type", ruleValue = "phone"
Output: 2
Explanation: There are only two items matching the given rule, which are ["phone","blue","pixel"] and ["phone","gold","iphone"]. Note that the item ["computer","silver","phone"] does not match.
*/
let items1 = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]];
let ruleKey1 = "color"; //typeFIR, colorSEC nameTHIRD
let ruleValue1 = "silver";

let items2 = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]];
let ruleKey2 = "type"; //typeFIR, colorSEC nameTHIRD
let ruleValue2 = "phone";

var countMatches = function(items, ruleKey, ruleValue) {
    //we make if statements to define the value of ruleKey
    //where type = 0, color = 1, name = 2
    if(ruleKey === "type") ruleKey = 0;
    if(ruleKey === "color") ruleKey = 1;
    if(ruleKey === "name") ruleKey = 2;
    //we need a var count to keep track of the matches
    let count = 0;
    //now we loop through items and make if statements
    for(let i = 0; i < items.length; i++){
        //if items[i][ruleKey] === ruleValue we add to count;
        if(items[i][ruleKey] === ruleValue){
            count++;
        }
    }
    return count;
};
console.log(countMatches(items2, ruleKey2, ruleValue2));