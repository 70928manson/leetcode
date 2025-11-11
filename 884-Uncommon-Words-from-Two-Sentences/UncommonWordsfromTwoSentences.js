/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  const res = [];

  // 優化版 s1+s2 合併
  const s = `${s1} + " " + ${s2}`;

  const map = new Map();

  const words = s.split(" ");
  for (const word of words) {
    map.set(word, (map.get(word) ?? 0) + 1);
  }

  for (const [word, count] of map) {
    if (count === 1) res.push(word);
  }

  return res;
};
