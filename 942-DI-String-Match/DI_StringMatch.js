/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  let res = [];

  let min = 0;
  let max = s.length;

  // 每一步選最極端的狀況
  for (let ch of s) {
    if (ch === "I") {
      res.push(min);
      min++;
    } else {
      res.push(max);
      max--;
    }
  }

  // 剩最後一個
  res.push(min);

  return res;
};
