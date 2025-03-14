/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    const flatArr = mat.flat(Infinity);

    // 若數量不匹配，直接返回原陣列
    if (flatArr.length !== r * c) return mat;

    let index = 0;

    let res = [];
    for (let i = 0; i < r; i++) {
        let row = [];

        for (let j = 0; j < c; j++) {
            row.push(flatArr[index]); // 取出陣列第一個元素
            index++; // 移動到 flatArr 下一個元素
        };

        res.push(row);
    };

    return res;
};