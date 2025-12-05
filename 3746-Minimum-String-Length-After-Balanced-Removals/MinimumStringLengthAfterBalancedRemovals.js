/**
 * @param {string} s
 * @return {number}
 */
var minLengthAfterRemovals = function (s) {
  let countA = 0;
  let countB = 0;

  for (const char of s) {
    if (char === "a") {
      countA++;
    } else {
      countB++;
    }
  }

  return Math.abs(countA - countB);
};
