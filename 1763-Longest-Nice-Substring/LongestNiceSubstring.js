/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function (s) {
  if (s.length <= 1) return "";

  let longgestNiceStr = "";

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      const temp = s.slice(i, j + 1);

      if (isNiceString(temp) && temp.length > longgestNiceStr.length) {
        longgestNiceStr = temp;
      }
    }
  }

  return longgestNiceStr;
};

// 找 charcode s.charCodeAt()
// charCode 反推字母 String.fromCharCode
// A: 65,  a: 97

// if we find something >= 97
// 把它 -32 看 傳進來的 string 有沒有
// 如果 >= 65 && < 97, +32 看 set 有沒有
const isNiceString = (s) => {
  const set = new Set(s);

  for (const ch of set) {
    const code = ch.charCodeAt(0);

    // code: a~z
    if (code >= 65 && code <= 90) {
      // 找對應的 A~Z
      const upper = String.fromCharCode(code + 32);
      if (!set.has(upper)) return false;
      // code: A~Z
    } else if (code >= 97 && code <= 122) {
      // 找對應的 a~z
      const lower = String.fromCharCode(code - 32);
      if (!set.has(lower)) return false;
    }
  }

  return true;
};
