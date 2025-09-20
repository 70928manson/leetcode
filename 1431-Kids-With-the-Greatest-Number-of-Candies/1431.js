/**
  1. 先找出 candies 中最大的
  2. 迴圈看看當前 item + extra 是否大於 candies 最大的
 */

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const res = [];

  let max = -Infinity;

  for (const candie of candies) {
    if (candie > max) {
      max = candie;
    }
  }

  for (const candie of candies) {
    if (candie + extraCandies >= max) {
      res.push(true);
    } else {
      res.push(false);
    }
  }

  return res;
};
