/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let ans = 0;

  const hash = {};

  for (let i = 0; i < allowed.length; i++) {
    const char = allowed[i];
    if (hash[char] === undefined) {
      hash[char] = true;
    }
  }

  for (let z = 0; z < words.length; z++) {
    let flag = true;

    for (let j = 0; j < words[z].length; j++) {
      const char = words[z][j];

      if (hash[char] === undefined) {
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
