/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let max = -Infinity;

  for (const account of accounts) {
    const total = account.reduce((sum, money) => sum + money, 0);

    if (total > max) max = total;
  }

  return max;
};
