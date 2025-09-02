/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const dp = new Array(cost.length);
  dp[0] = 0;
  dp[1] = 0;

  // 到 cost length, 因為要到頂樓
  for (let i = 2; i <= cost.length; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }

  return dp[cost.length];
};
