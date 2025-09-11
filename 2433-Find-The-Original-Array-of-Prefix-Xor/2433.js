/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function (pref) {
  const ans = [];

  for (let i = 0; i < pref.length; i++) {
    const num = pref[i];
    if (i === 0) {
      ans.push(num);
    } else {
      ans.push(num ^ pref[i - 1]);
    }
  }

  return ans;
};
