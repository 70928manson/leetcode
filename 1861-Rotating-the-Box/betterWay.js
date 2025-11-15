/**
 * @param {character[][]} boxGrid
 * @return {character[][]}
 */
var rotateTheBox = function (boxGrid) {
    const m = boxGrid.length;
    const n = boxGrid[0].length; 

    // 1: 在原本的 box 上，先讓石頭往右掉到底
    for (let i = 0; i < m; i++) {
        let empty = n - 1; // 紀錄目前這一列最右邊能放石頭的地方

        // 從右往左掃，遇到：
        // * '*'：障礙，重設 empty 為它左邊一格
        // * '#'：把石頭搬到 empty，自己變成 '.'
        // * '.'：跳過
        for (let j = n - 1; j >= 0; j--) {
            const item = boxGrid[i][j];
            if (item === "*") {
                empty = j - 1;
            } else if (item === "#") {
                // TODO: check
                if (j !== empty) {
                    boxGrid[i][empty] = '#';
                    boxGrid[i][j] = '.'
                }
                empty--;  // 是石頭的話, empty 也要減少更新石頭能落下的地方
            }
        }
    }

    // Step 2: 旋轉 90 度順時針：原本是 m x n，變成 n x m
    const rotated = Array.from({ length: n }, () => Array(m));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            rotated[j][m - 1 - i] = boxGrid[i][j];
        }
    }

    return rotated;
};