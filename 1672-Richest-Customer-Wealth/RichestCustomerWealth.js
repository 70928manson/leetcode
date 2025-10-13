/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let max = -Infinity;

  for (const account of accounts) {
    let total = 0;
    for (const bank of account) {
      total += bank;
    }

    if (total > max) {
      max = total;
    }
  }

  return max;
};
