/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let res = "";
  let depth = 0;

  for (const ch of s) {
    if (ch === "(") {
      if (depth > 0) res += ch;
      depth++;
    } else {
      depth--;
      if (depth > 0) res += ch;
    }
  }

  return res;
};
