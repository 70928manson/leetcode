/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let ans = 0;

  const set = new Set(allowed);

  for (let i = 0; i < words.length; i++) {
    let flag = true;

    for (let j = 0; j < words[i].length; j++) {
      const char = words[i][j];
      if (!set.has(words[i][j])) {
        flag = false;
        break;
      }
    }

    if (flag) {
      ans++;
    }
  }

  return ans;
};
