/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m, n, indices) {
    // const matrix = [];
    // for (let i = 0; i < m; i++) {
    //     matrix[i] = []; // 記得先初始化這一列
    //     for (let j = 0; j < n; j++) {
    //         matrix[i][j] = 0;
    //     }
    // }

    const matrix = new Array(m).fill(0).map(item => new Array(n).fill(0))

    // 依照 indice[i] 對指定 row 或 column 全部 + 1
    for (let i = 0; i < indices.length; i++) {
        let rowPlus = indices[i][0];
        let columnPlus = indices[i][1];

        // matrix 指定 row 的 n 個元素要被 + 1
        for (let z = 0; z < n; z++) {
            matrix[rowPlus][z]++;
        };
        // matrix 指定 column 的 m 個元素要被 + 1
        for (let j = 0; j < m; j++) {
            matrix[j][columnPlus]++;
        };
    };

    let count = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] % 2 === 1) {
                count++;
            };
        };
    };

    return count;
};