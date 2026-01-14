/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  // 回傳重複出現兩次 & 少掉的

  // 數學 / XOR，空間 O(1)
  // 總合差
  const n = nums.length;
  const seen = new Array(n + 1).fill(false);

  let dup = -1;
  let sum = 0;

  for (const num of nums) {
    sum += num;
    if (seen[num]) dup = num;
    else seen[num] = true;
  }

  const expected = (n * (n + 1)) / 2;
  const missing = expected - (sum - dup);

  return [dup, missing];
};
