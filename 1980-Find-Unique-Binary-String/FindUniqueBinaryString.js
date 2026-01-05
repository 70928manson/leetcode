/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
  const n = nums.length;
  let res = "";

  // 用對角線構造法
  // 讓 res[i] 與 nums[i] 在第 i 個位置必定不同
  // 因此 res 不可能等於任何一個 nums[i]
  for (let i = 0; i < n; i++) {
    res += nums[i][i] === "0" ? "1" : "0";
  }

  return res;
};
