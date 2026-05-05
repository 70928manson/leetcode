/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  // 最後一個 row 不用檢查
  // 每個 row 最後一個 item 不用檢查
  // 檢查 matrix[i+1][j+1]

  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[i].length - 1; j++) {
      if (matrix[i + 1][j + 1] !== matrix[i][j]) return false;
    }
  }

  return true;
};
