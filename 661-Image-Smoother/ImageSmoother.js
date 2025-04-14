/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
    const m = img.length;         // 圖片的列數（高度）
    const n = img[0].length;      // 圖片的欄數（寬度）
    const result = Array.from({ length: m }, () => Array(n).fill(0)); // 初始化結果矩陣

    const dirs = [-1, 0, 1]; // 用於生成 3x3 區域的偏移量

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let sum = 0;
            let count = 0;

            // 遍歷以 (i, j) 為中心的 3x3 區域
            for (let dx of dirs) {
                for (let dy of dirs) {
                    const x = i + dx;
                    const y = j + dy;

                    // 檢查是否在圖片範圍內
                    if (x >= 0 && x < m && y >= 0 && y < n) {
                        sum += img[x][y];
                        count++;
                    }
                }
            }

            result[i][j] = Math.floor(sum / count);
        }
    }

    return result;
};
