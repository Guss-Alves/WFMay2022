/* 
example 1
Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true] 
Explanation: If you give all extraCandies to:
- Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
- Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
- Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
- Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
- Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.

example 2
Input: candies = [4,2,1,1,2], extraCandies = 1
                    i \
                    WE
                  j
Output: [true,false,false,false,false] 
Explanation: There is only 1 extra candy.
Kid 1 will always have the greatest number of candies, even if a different kid is given the extra candy.

example 3
Input: candies = [12,1,12], extraCandies = 10
Output: [true,false,true]
*/
let candies1 = [2,3,5,1,3]; extraCandies1 = 3 // Output: [true,true,true,false,true] 
let candies2 = [4,2,1,1,2]; extraCandies2 = 1 // Output: [true,false,false,false,false]  
let candies3 = [12,1,12]; extraCandies3 = 10 // Output: [true,false,true]

var kidsWithCandies = function(candies, extraCandies) {
    //we want to have a var Output to push true or false
    let output = [];
    //we wan to have a var j and i that starts at 0
    let i = 0; let j = 0;
    //we will have a while loop for conditions as long as i is within bounds
    while(i < candies.length){
        //we want to have a var withExtra for the cadies[i]
        let withExtra = candies[i] + extraCandies;
        //if withExtra value its bigger than candies[j] increment j
        if(withExtra >= candies[j]){
            j++;
        }
        else{
            //else push false to output and increment i and set j back to 0
            output.push(false);
            i++;
            j = 0;
        }
        //if j gets to the end of the array then we will push true
        if(j == candies.length){
            output.push(true);
            i++;
            j = 0;
        }
    }
    return output;
};
console.log(kidsWithCandies(candies3, extraCandies3));