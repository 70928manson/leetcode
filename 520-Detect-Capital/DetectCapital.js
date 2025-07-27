/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  // "FFFFFFFFFFFFFFFFFFFFf"
  // "Leetcode"

  const len = word.length;

  // 全大寫
  if (word === word.toUpperCase()) {
    return true;
  }

  // 全小寫
  if (word === word.toLowerCase()) {
    return true;
  }

  // 首字大寫 其他小寫
  if (
    word[0] === word[0].toUpperCase() &&
    word.slice(1) === word.slice(1).toLowerCase()
  ) {
    return true;
  }

  return false;
};
