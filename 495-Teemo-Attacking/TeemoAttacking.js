/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let ans = 0;

    // timSeries 兩兩比對
    for (let i = 0; i < timeSeries.length - 1; i++) {
        if (timeSeries[i+1] - timeSeries[i] > duration) {
            ans += duration;
        } else {
            ans += timeSeries[i+1] - timeSeries[i];
        };
    };

    // 最後再加上 duration
    ans += duration;

    return ans;
};