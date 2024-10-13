/**
 * 初始從 [1]開始
 * 每一行的第一個和最後一個都是 1
 * 除此之外, 第 i 個都是 上一行第i個和第i-1個相加
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */

// 雙層迴圈版
 var generate = function(numRows) {
    const ans = [];
    for (let i = 0; i < numRows; i++) {
        if (i === 0) {
            ans.push([1])
        } else {
            let tempRow = [];
            for (let z = 0; z <= i; z++) {
                if (z === 0 || z === i) {
                    tempRow[z] = 1;
                } else {
                    tempRow[z] = ans[i-1][z] + ans[i-1][z-1]
                };
            };
            ans.push(tempRow);
        };
    };
    return ans;
 };