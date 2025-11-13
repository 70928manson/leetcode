/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  // 題目等於是找 nums 有多少數字小於 k
  let res = 0;

  for (const num of nums) {
    if (num < k) res++;
  }

  return res;
};
