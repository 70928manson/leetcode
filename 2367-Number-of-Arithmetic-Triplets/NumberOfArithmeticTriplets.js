/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
  let res = 0;

  const set = new Set(nums);

  for (const num of nums) {
    // 往前看
    const second = num + diff;
    const third = second + diff;

    if (set.has(second) && set.has(third)) res++;
  }

  return res;
};
