/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  let operations = 0;

  for (const num of nums) {
    if (num % 3 === 1) operations += 1; // -1
    if (num % 3 === 2) operations += 1; // +1
  }

  return operations;
};
