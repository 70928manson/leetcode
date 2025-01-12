/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0) {
        return [1];
    } else if (rowIndex === 1) {
        return [1, 1];
    };

    const all = [];

    // 次數
    for (let i = 0; i <= rowIndex; i++) {
        if (i === 0) {
            all.push([1]);
        } else {
            let temp = [];
            for (let j = 0; j <= i; j++) {
                if (j === 0 || j === i) {
                    temp[j] = 1;
                } else {
                    temp[j] = all[i-1][j-1] + all[i-1][j];
                }
            };
            all.push(temp);
        };
    };

    return all[rowIndex];
};