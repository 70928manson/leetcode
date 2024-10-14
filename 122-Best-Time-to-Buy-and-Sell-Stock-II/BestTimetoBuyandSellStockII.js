/**
 * 頻繁參與交易, 把握每一次能獲益的交易
 * 小技巧: 把價格圖表畫出來, 抓出所有向上(正獲利)的交易
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let buy = prices[0];

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] - buy > 0) {
            profit += prices[i] - buy;
        } 
        
        buy = prices[i];
    };

    return profit;
};