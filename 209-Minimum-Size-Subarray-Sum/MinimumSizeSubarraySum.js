/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  // sliding window 左右指針變化版
  let left = 0;
  let right = 1;
  let sum = nums[0];
  let minDistance = 0; // 預設值 0

  // 達成目標縮短左邊
  // 未達成目標擴增右邊
  while (true) {
    if (sum < target) {
      if (right >= nums.length) {
        break;
      }
      sum += nums[right];
      right++;
    } else {
      const currentDistance = right - left;
      if (minDistance > currentDistance || minDistance === 0) {
        minDistance = currentDistance;
      }
      sum -= nums[left];
      left++;
    }
  }

  return minDistance;
};
