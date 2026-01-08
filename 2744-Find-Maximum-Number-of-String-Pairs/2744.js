/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
  const set = new Set();

  let pairs = 0;

  for (const word of words) {
    const reversedWord = Array.from(word).reverse().join("");
    if (set.has(reversedWord)) {
      pairs++;
      set.delete(reversedWord);
    } else {
      set.add(word);
    }
  }

  return pairs;
};
