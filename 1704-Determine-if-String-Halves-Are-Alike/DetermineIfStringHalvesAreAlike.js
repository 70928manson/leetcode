/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  const middle = s.length / 2;

  let vowelCounts = 0;

  for (let i = 0; i < middle; i++) {
    if (vowels.has(s[i])) vowelCounts++;
    if (vowels.has(s[i + middle])) vowelCounts--;
  }

  return vowelCounts === 0;
};
