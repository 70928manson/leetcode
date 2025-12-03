/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  const words = sentence.split(" ");

  let suffix = "a";
  let res = "";

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const first = word[0];

    if (vowels.has(first)) {
      // 開頭是母音：直接 + "ma"
      res += word + "ma";
    } else {
      // 開頭是子音：把第一個字母搬到最後再 + "ma"
      res += word.slice(1) + first + "ma";
    }

    // 加上對應數量的 'a'
    res += suffix;

    // 非最後一個字加空白
    if (i !== words.length - 1) res += " ";

    // 下一個字多一個 'a'
    suffix += "a";
  }

  return res;
};
