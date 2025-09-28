/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
  const vowelMap = new Map();
  const consMap = new Map();
  let maxV = 0,
    maxC = 0;

  const vowels = new Set(["a", "e", "i", "o", "u"]);

  for (const char of s) {
    const map = vowels.has(char) ? vowelMap : consMap;
    const next = (map.get(char) ?? 0) + 1;
    map.set(char, next);

    if (map === vowelMap) {
      if (next > maxV) maxV = next;
    } else if (map === consMap) {
      if (next > maxC) maxC = next;
    }
  }

  return maxV + maxC;
};
