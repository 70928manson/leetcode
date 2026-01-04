/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const n = board.length;

  // 行跟列不會出現同樣的數字
  // 3 x 3 也不會
  const rows = Array.from({ length: n }, () => new Set());
  const columns = Array.from({ length: n }, () => new Set());
  const boxes = Array.from({ length: n }, () => new Set());

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const num = board[i][j];

      if (num === ".") continue;

      //  第幾個 3 x 3 box
      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      // row 重複, column 重複, boxes 重複
      if (rows[i].has(num) || columns[j].has(num) || boxes[boxIndex].has(num))
        return false;

      rows[i].add(num);
      columns[j].add(num);
      boxes[boxIndex].add(num);
    }
  }

  return true;
};
