/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function (nums) {
  const zeros = [];
  const ones = [];

  for (num of nums) {
    if (num % 2 === 0) {
      zeros.push(0);
    } else {
      ones.push(1);
    }
  }

  return [...zeros, ...ones];
};
