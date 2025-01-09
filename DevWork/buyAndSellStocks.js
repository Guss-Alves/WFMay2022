/**
 * @param {number[]} prices
 * @return {number}
 */

let prices1 = [7,1,5,3,6,4];
let prices2 = [7,6,4,3,1];
var maxProfit = function(prices) {
    //lets create 2 variables, minPrice and biggestProfit
    let minPrice = Infinity;
    let biggestProfit = 0;
    //we create a loop to itirate through the array
    for( let i = 0; i < prices.length; i++){
    //then we create a variable to keep track of the currentPrice
        let currentPrice = prices[i];
        //if currentPrice is less than the minPrice we update minPrice
        if(currentPrice < minPrice){
            minPrice = currentPrice;
        }
        //lets calculate the potential profit if we sell today
        let profit = currentPrice - minPrice;
        //if profit is bigger than biggestProfit we want to update that
        if(profit > biggestProfit){
            biggestProfit = profit;
        }
    }
    return biggestProfit;
};

console.log(maxProfit(prices1));
console.log(maxProfit(prices2));