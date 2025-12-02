/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function (s, distance) {
  // firstIdx[c] 紀錄字母 c 第一次出現的 index
  // -1 表示還沒出現過
  const firstIdx = new Array(26).fill(-1);

  for (let i = 0; i < s.length; i++) {
    const code = s.charCodeAt(i) - 97; // 97 是 'a'.charCodeAt(0)

    // 第一次遇到這個字母，先記錄位置
    if (firstIdx[code] === -1) {
      firstIdx[code] = i;
      continue;
    }

    // 第二次遇到，計算距離並比對 distance
    const gap = i - firstIdx[code] - 1;
    if (gap !== distance[code]) {
      return false;
    }
  }

  return true;
};
