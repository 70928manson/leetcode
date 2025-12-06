/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  let count = 0;

  for (const num of nums) {
    count += num;
  }

  return count % k;
};
