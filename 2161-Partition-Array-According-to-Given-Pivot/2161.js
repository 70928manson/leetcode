/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
  const less = [];
  const greater = [];
  const same = [];

  for (const num of nums) {
    if (num < pivot) {
      less.push(num);
    } else if (num > pivot) {
      greater.push(num);
    } else {
      same.push(num);
    }
  }

  return [...less, ...same, ...greater];
};
