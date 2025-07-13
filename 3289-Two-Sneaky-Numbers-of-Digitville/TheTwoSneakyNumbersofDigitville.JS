/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (nums) {
  const ans = [];

  const map = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      ans.push(nums[i]);
    } else {
      map.add(nums[i]);
    }
  }

  return ans;
};
