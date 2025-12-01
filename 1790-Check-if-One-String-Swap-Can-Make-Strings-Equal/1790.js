/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// 不需要 map, 只需要遍歷 s1, 看位置不對的地方是否只有 2 個或 0 個, 超過的話代表 swap 一次不夠就 false
// 若有 2 個, 檢查這兩個部分 swap 後是否相同
var areAlmostEqual = function (s1, s2) {
  if (s1 === s2) return true;

  const diff = [];

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      diff.push(i);
      // 超過兩個不一樣的位置，肯定不能只靠一次 swap 解決
      if (diff.length > 2) return false;
    }
  }

  // 0 個的狀況在最上面判斷
  if (diff.length !== 2) return false;

  const [i, j] = diff;

  const check = s1[i] === s2[j] && s1[j] === s2[i];

  return check ? true : false;
};
