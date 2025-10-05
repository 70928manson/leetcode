/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let max = 0;

  let balance = 0;
  for (const char of s) {
    if (char === "R") balance++;
    else balance--;

    if (balance === 0) max++;
  }

  return max;
};
