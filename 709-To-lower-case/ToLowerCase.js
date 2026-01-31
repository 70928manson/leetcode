/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
  let res = "";

  for (const ch of s) {
    const code = ch.charCodeAt(0);
    if (code >= 65 && code <= 90) {
      res += String.fromCharCode(code + 32);
    } else {
      res += ch;
    }
  }

  return res;
};
