/* 
Example 1:
Input: names = ["Mary","John","Emma"], heights = [180,165,170]
Output: ["Mary","Emma","John"]
Explanation: Mary is the tallest, followed by Emma and John.

Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
Output: ["Bob","Alice","Bob"]
Explanation: The first Bob is the tallest, followed by Alice and the second Bob
*/
let names1 = ["Mary","John","Emma"]; //["Mary","Emma","John"]
let heights1 = [180,165,170];

var sortPeople = function(names, heights) {
    //the idea is to make a bubble sort with the heights array, and make the differences on both arrays
    //if one height value moves, the same name will move too
    for(let i = 0; i < heights.length; i++){
        for(let j = i + 1; j < heights.length; j++){
            if(heights[i] < heights[j]){
                [heights[i], heights[j]] = [heights[j], heights[i]];
                [names[i], names[j]] = [names[j], names[i]];
            }
        }
    }
    return names;
};
console.log(sortPeople(names1, heights1));