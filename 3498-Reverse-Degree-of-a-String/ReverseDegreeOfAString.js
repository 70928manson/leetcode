/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function (s) {
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    // 取得 a=1, b=2 ... z=26
    const temp = s.charCodeAt(i) - 96;
    // 轉成 reverse 值 (26->1, 25->2 ... 1->26)
    const reverse = 27 - temp;
    // product後累加
    res += reverse * (i + 1);
  }

  return res;
};
