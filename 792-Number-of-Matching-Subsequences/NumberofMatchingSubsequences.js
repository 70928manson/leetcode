/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (s, words) {
  let res = 0;

  // hash map 去紀錄出現位置和次數
  // 先看次數, 在用頭尾位置縮小範圍
  const hash = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (hash[char]) {
      hash[char].push(i);
    } else {
      hash[char] = [i];
    }
  }

  console.log("hash", hash);

  // 由左至右
  // 用 prePosition 紀錄上一個 char 的位置
  for (const word of words) {
    let prePosition = -1;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (hash[char]) {
        const positions = hash[char];

        let matched = true;

        // 找 arr 中第一個 > prev 的位置
        const k = upperBound(positions, prePosition);
        if (k === -1) {
          matched = false;
          break;
        }
        prePosition = positions[k];

        // 如果是最後一個 char, 則是 subsequence
        if (i === word.length - 1) {
          res++;
        }

        if (!matched) {
          break; // 這個 word 不可能是 subsequence, 下面一位
        }
      } else {
        break; // 這個 word 不可能是 subsequence, 下面一位
      }
    }
  }

  return res;
};

function upperBound(arr, target) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = (left + right) >> 1;
    if (arr[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left < arr.length ? left : -1; // 回傳索引，找不到就 -1
}
