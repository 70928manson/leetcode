/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
  let prev = 0; // 上一個非 0 的雷射機數量
  let res = 0;

  for (const row of bank) {
    let cur = 0;
    for (const ch of row) {
      if (ch === "1") cur++;
    }

    if (cur > 0) {
      res += prev * cur;
      prev = cur;
    }
  }

  return res;
};
