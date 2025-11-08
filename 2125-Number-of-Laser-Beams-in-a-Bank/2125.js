/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
  // 先看當前行有幾個 ex: 3 個
  // 看當前行的往下雷射有幾個 ex: 2 個
  let count = [];
  for (const devices of bank) {
    let temp = 0;
    for (const device of devices) {
      if (device === "1") {
        temp++;
      }
    }

    if (temp !== 0) count.push(temp);
  }

  let res = 0;

  for (let i = 0; i < count.length - 1; i++) {
    res += count[i] * count[i + 1];
  }

  return res;
};
