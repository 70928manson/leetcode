/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
  // 第一個 word 第一個 char 要跟 最後 word 最後 char 一樣
  if (sentence[0] !== sentence.at(-1)) return false;

  for (let i = 0; i < sentence.length; i++) {
    // 每個 word 的最後 char 要跟下一個 word 開頭 char 一樣
    if (sentence[i] === " " && sentence[i - 1] !== sentence[i + 1])
      return false;
  }

  return true;
};
