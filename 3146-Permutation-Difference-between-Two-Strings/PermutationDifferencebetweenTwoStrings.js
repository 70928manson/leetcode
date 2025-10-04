/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function (s, t) {
  let res = 0;
  const map = new Map();

  for (let i = 0; i < t.length; i++) {
    map.set(t[i], i);
  }

  for (let i = 0; i < s.length; i++) {
    res += Math.abs(i - map.get(s[i]));
  }

  return res;
};
