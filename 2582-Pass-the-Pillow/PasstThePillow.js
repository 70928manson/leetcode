/**
 * @param {number} n 
 * @param {number} time 
 * @return {number} 
 */
var passThePillow = function(n, time) {
    // 一次來回的總長度為 2*(n-1)，找出 time 在第幾個週期內的相對位置
    let relativeTime = time % (2 * (n - 1));

    // 如果次數超過了 n-1，表示現在正在回頭
    if (relativeTime >= n - 1) {
        // 反方向從右往左，對稱位置：n - (相對次數 - (n-1))
        return n - (relativeTime - (n - 1));
    } else {
        // 還在正方向從左往右，編號為 1 + relativeTime
        return 1 + relativeTime;
    }
};
