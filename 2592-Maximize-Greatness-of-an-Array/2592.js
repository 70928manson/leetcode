/**
 * @param {number[]} nums
 * @return {number}
 */
var maximizeGreatness = function (nums) {
  if (nums.length === 1) return 0;

  let greatness = 0;

  // 先排序
  // 1 1 1 2 3 3 5
  const sorted = nums.toSorted((a, b) => a - b);

  // 雙指針
  let i = 0;
  let j = 1;

  while (j < nums.length) {
    if (sorted[i] < sorted[j]) {
      i++;
      greatness++;
    }
    j++;
  }

  return greatness;
};
