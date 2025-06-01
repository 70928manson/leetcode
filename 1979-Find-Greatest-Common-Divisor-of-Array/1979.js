/**
    先找最小跟最大, 在求最大公約數
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
  let largest = 0;
  let smallest = 10000;

  for (const num of nums) {
    if (num > largest) {
      largest = num;
    }

    if (num < smallest) {
      smallest = num;
    }
  }

  return getGCD(smallest, largest);
};

// 輾轉相除法
function getGCD(a, b) {
  if (b === 0) return a;
  return getGCD(b, a % b);
}
