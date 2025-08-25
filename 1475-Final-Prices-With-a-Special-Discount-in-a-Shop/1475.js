/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  const n = prices.length;
  const ans = new Array(n);
  const stack = [];

  // 建立遞減單調 stack  從右往左
  for (let i = n - 1; i >= 0; i--) {
    const p = prices[i];

    // 把右邊比我大的都彈掉 相等要保留（因為要找 ≤）
    while (stack.length > 0 && stack[stack.length - 1] > p) {
      stack.pop();
    }

    // 此時 stack 最後一個若存在，就是右邊第一個 ≤ p 的值；否則折扣 0
    const discount = stack.length ? stack[stack.length - 1] : 0;
    ans[i] = p - discount;

    stack.push(prices[i]);
  }

  return ans;
};
