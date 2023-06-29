/* 
example 1:
Input: security = [5,3,3,3,5,6,2], time = 2
Output: [2,3]
Explanation:
On day 2, we have security[0] >= security[1] >= security[2] <= security[3] <= security[4].
On day 3, we have security[1] >= security[2] >= security[3] <= security[4] <= security[5].
No other days satisfy this condition, so days 2 and 3 are the only good days to rob the bank.
*/

let security1 = [5, 3, 3, 3, 5, 6, 2]; let time1 = 2; //Output: [2,3]
let security2 = [1, 1, 1, 1, 1]; let time2 = 0; //Output: [0,1,2,3,4]
let security3 = [1, 2, 3, 4, 5, 6]; let time3 = 2 // [];
let security4 = [3, 1, 20, 17, 26, 0, 2, 29, 24]; let time4 = 3 // [];
let security5 = [1, 2, 5, 4, 1, 0, 2, 4, 5, 3, 1, 2, 4, 3, 2, 4, 8]; let time5 = 2 // [5,10,14];


//I am getting super close, but not being able to cover every possible test case;
var goodDaysToRobBank = function (security, time) {
    //empty array called output
    let output = [];
    //we gonna have i starting at time, we gonna have "before" starting at i - time, we gonna have "after" starting at i + time
    let i = time; let before = i - time; let after = i + time;
    //if "after" > security.length return output
    while (after < security.length) {
        //if before is bigger than orignal or if after if bigger than original return empty output
        if (security[before] > security[i - time] || security[after] > security[i + time] && security[before] > security[i] && security[after] > security[i]) {
            return output;
        }
        //if time == 0 then make a for loop pushing i to output
        if (time === 0) {
            for (let index = 0; index < security.length; index++) {
                output.push(index);
            }
            return output;
        }
        //if security[before] && security[after] are >= security[i] before ++ after--
        if (security[before] >= security[i] && security[after] >= security[i]) {
            before++;
            after--;
            //else we do i++, and before and after goes back to original values
        } else {
            i++;
            before = i - time;
            after = i + time;
        }
        //if variables "before" and "after" are == i we will push i to array output
        if (before == i && after == i) {
            output.push(i);
            i++;
            before = i - time;
            after = i + time;
        }
    }
    return output;
};
console.log(goodDaysToRobBank(security5, time5));

//here is a solution that work
var goodDaysToRobBank2 = function (a, t) {
    let an = [];
    for (let i = t; i + t < a.length; i++) {
        let bad = 0
        for (let j = i - t + 1; j <= i; j++)
            if (a[j - 1] < a[j]) {
                bad = 1; // increasing
                break
            }
        for (let j = i + 1; j <= i + t; j++)
            if (a[j - 1] > a[j]) {
                bad = 1; // decreasing
                break
            }
        if (!bad) {
            an.push(i)
        }
    }
    return an;
};