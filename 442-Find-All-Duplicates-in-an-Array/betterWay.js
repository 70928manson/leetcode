/**
  In-place 標記法 (In-place marking)
  題目規定每個數字一定出現 1 或 2 次
  n = nums.length
  n 1~10000

  不是變成 -1, 是乘以 -1
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  const ans = [];

  for (let i = 0; i < nums.length; i++) {
    const num = Math.abs(nums[i]);
    if (nums[num - 1] < 0) {
      ans.push(Math.abs(num));
    }
    nums[num - 1] *= -1;
  }

  return ans;
};
