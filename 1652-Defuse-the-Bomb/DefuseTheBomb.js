/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
  const len = code.length;
  const ans = [];

  let tempSum = 0;

  // 若 k > 0, window 範圍 i + 1 ~ i + k
  // 若 k < 0, window 範圍 i - 1 ~ i + k
  for (let i = 0; i < code.length; i++) {
    if (k === 0) {
      ans.push(0);
    } else if (k > 0) {
      if (tempSum !== 0) {
        // 減掉上一個 sliding window 的第一個數字, 加上下一個 sliding window 的最後一個數
        tempSum = tempSum - code[i] + code[modulo(i + k, len)];
      } else {
        // 初始迴圈
        for (let j = i + 1; j <= i + k; j++) {
          let trueIndex = modulo(j, len);
          tempSum += code[trueIndex];
        }
      }
      ans.push(tempSum);
    } else {
      if (tempSum !== 0) {
        // 減掉上一個 sliding window 的最後一個數字, 加上下一個 sliding window 的第一個數
        // 注意反過來的順序
        tempSum =
          tempSum - code[modulo(i - 1 + k, len)] + code[modulo(i - 1, len)];
      } else {
        // 初始迴圈
        for (let j = len - 1; j >= len + k; j--) {
          let trueIndex = modulo(j, len);
          tempSum += code[trueIndex];
        }
      }
      ans.push(tempSum);
    }
  }

  return ans;
};

// 讓索引在 [0 .. len-1] 之間循環的 function
// e.g. len = 5, index = 6 => 1; index = -1 => 4
const modulo = (index, len) => {
  if (index > len - 1) {
    return index - len;
  } else if (index < 0) {
    return index + len;
  } else {
    return index;
  }
};
