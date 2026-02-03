/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1 || s.length <= numRows) return s;

  const rows = Array.from({ length: numRows }, () => []);
  const cycleLen = 2 * numRows - 2;

  for (let i = 0; i < s.length; i++) {
    const pos = i % cycleLen;
    const row = pos < numRows ? pos : cycleLen - pos;
    rows[row].push(s[i]);
  }

  return rows.map((r) => r.join("")).join("");
};
