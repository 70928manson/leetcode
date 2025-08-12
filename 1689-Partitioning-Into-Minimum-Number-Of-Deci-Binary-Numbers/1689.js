/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
  // 答案就是 n 這個數字字串裡的最大數字
  let biggest = 0;

  for (let i = 0; i < n.length; i++) {
    const digit = Number(n[i]);
    if (digit > biggest) {
      biggest = digit;
    }
  }

  return biggest;
};
