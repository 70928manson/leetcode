/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  // 一次遍歷同時紀錄頻率、首次出現的 index (為了計算最小長度)

  const freq = new Map();
  const firstIndex = new Map();
  let maxCount = 0;
  let minLength = nums.length;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (!firstIndex.has(num)) {
      firstIndex.set(num, i);
    }

    const count = (freq.get(num) || 0) + 1;
    freq.set(num, count);

    if (count > maxCount) {
      maxCount = count;
      minLength = i - firstIndex.get(num) + 1;
    } else if (count === maxCount) {
      minLength = Math.min(minLength, i - firstIndex.get(num) + 1);
    }
  }

  return minLength;
};
