/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  // 先 sort, 然後用 map 紀錄每個 element 第一次出現的 index 位置, 代表有多少 nums 比他小
  const sortNums = [...nums].sort((a, b) => a - b);

  const map = {};

  for (let i = 0; i < sortNums.length; i++) {
    const num = sortNums[i];
    if (map[num] === undefined) {
      map[num] = i;
    }
  }

  return nums.map((num) => map[num]);
};
