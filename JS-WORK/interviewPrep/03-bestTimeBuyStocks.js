/*  121. Best Time to Buy and Sell Stock

Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
*/

let prices1 = [7,1,5,3,6,4]; //5
let prices2 = [7,6,4,3,1]; //0
/*          BRAINSTORM
i   j  its gonna itaterate through the array to check the values
            difTemp = 3  difference Temp its gonna keep track of the current differences of values of buy and sell
//          bestProfit = 5 this variable will only keep track of the biggest profit 
*/

// this was my solution, and its correct, but its not best practices bc is a double loop and slower than other options
const maxProfit = (prices)=>{
    let difTemp = 0;
    let bestProfit = 0;
    for(let i = 0; i < prices.length; i++){
        for(let j = i + 1; j < prices.length; j++){
            if(prices[j] > prices[i]){
                difTemp = prices[j] - prices[i];
            }
            if(difTemp > bestProfit){
                bestProfit = difTemp;
            }
        }
    }
    return bestProfit;
}
console.log(maxProfit(prices2));


let prices3 = [7,1,5,3,6,4]; //5

// this solution its faster therefore its better practice bc it gets aways with 1 loop
var secondMaxProfit = function(prices) {
    let maxProfit = 0;
    let minPrice = prices[0];
    for (let i = 1; i < prices.length; i++) {
        const currentPrice = prices[i];
        const currentProfit = currentPrice - minPrice;
        if (currentProfit > maxProfit) {
            maxProfit = currentProfit;
        }
        if (currentPrice < minPrice) {
            minPrice = currentPrice;
        }
    }
    return maxProfit;
};