/**
 * @param {character[][]} boxGrid
 * @return {character[][]}
 */
var rotateTheBox = function (boxGrid) {
  // stone 旋轉後會因為重力往下

  const m = boxGrid.length;
  const n = boxGrid[0].length;

  // 處理石頭, 在旋轉前就把石頭往右推

  for (let i = 0; i < m; i++) {
    // 1. 依照 * 障礙分組
    // 2. 統計每一組有多少空白.跟 石頭#
    // 3. 創建每一組 空白在前 石頭在後
    // 4. 每一組用 * concate
    const row = boxGrid[i]; // ['#', '.', '#']

    // 1 依照 * 障礙分組
    const base = row.join("").split("*");

    // 2. 統計每一組有多少空白.跟 石頭#
    for (let i = 0; i < base.length; i++) {
      const item = base[i];
      // item = '#.#'

      let c1 = 0; // 紀錄 .
      let c2 = 0; // 紀錄 #

      for (const c of item) {
        if (c === ".") c1++;
        if (c === "#") c2++;
      }

      // 3. 創建每一組 空白在前 石頭在後
      let newArr = [];
      for (let i = 0; i < c1; i++) {
        newArr.push(".");
      }
      for (let i = 0; i < c2; i++) {
        newArr.push("#");
      }
      base[i] = newArr;
    }
    // 4. 若 base 大於 1 個, 中間要有 '*'
    const finalBase = [];

    base.forEach((b, i) => {
      if (i !== base.length - 1) {
        finalBase.push(...b, "*");
      } else {
        finalBase.push(...b);
      }
    });

    boxGrid[i] = finalBase;
  }

  //[ '.', ',', '#', ',', '#' ]
  console.log("處理過後的 boxGrid", boxGrid);

  // 旋轉後會是 n x m
  const rotateArray = Array.from({ length: n }, () => new Array(m).fill("."));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 90 度順時針
      // rotateArray[j][最後一個 - i]
      rotateArray[j][m - 1 - i] = boxGrid[i][j];
    }
  }

  return rotateArray;
};
