/**
 * 買低賣高 !
 * 預設先選第一天為買進價格, 若之後有更小的再更換
 * 比對每一天減掉買進價格的獲利
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let buy = prices[0];

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < buy) {
            buy = prices[i]
        } else if (prices[i] - buy > profit) {
            profit = prices[i] - buy
        }
    }

    return profit;
};