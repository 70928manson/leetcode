/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  const rows = strs.length;
  const cols = strs[0].length;

  const columns = Array.from({ length: cols }, () => "");

  for (let r = 0; r < rows; r++) {
    const str = strs[r];
    for (let c = 0; c < cols; c++) {
      columns[c] += str[c];
    }
  }

  let res = 0;
  for (const col of columns) {
    for (let i = 0; i < col.length - 1; i++) {
      if (col[i] > col[i + 1]) {
        res++;
        break;
      }
    }
  }

  return res;
};
