/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let res = Math.max(...nums);

  let curMax = 1,
    curMin = 1;

  for (let num of nums) {
    let temp = curMax * num;
    curMax = Math.max(temp, curMin * num, num);
    curMin = Math.min(temp, curMin * num, num);

    res = Math.max(res, curMax);
  }

  return res;
};
