/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function (nums, k, multiplier) {
  for (let i = 0; i < k; i++) {
    let minIndex = 0;
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] < nums[minIndex]) minIndex = i;
    }
    nums[minIndex] *= multiplier;
  }

  return nums;
};
