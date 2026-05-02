/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  let ans = 0;

  const charsMap = new Map();

  for (const ch of chars) {
    const remain = charsMap.get(ch) ?? 0;

    charsMap.set(ch, remain + 1);
  }

  // 2. see map can go

  for (const word of words) {
    const countMap = new Map(charsMap);

    let flag = true;

    for (const ch of word) {
      const remain = countMap.get(ch) ?? 0;

      if (remain <= 0) {
        flag = false;
        break;
      }

      countMap.set(ch, remain - 1);
    }

    if (flag) {
      ans += word.length;
    }
  }

  return ans;
};
