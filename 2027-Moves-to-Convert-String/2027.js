/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function(s) {
    let res = 0;
    let index = 0;

    while (index < s.length) {
        if (s[index] === 'X') {
            res++;
            index += 3; // 跳過當前 'X' 及接下來的 2 個字元
        } else {
            index++; // 遇到 'O'，繼續前進
        }
    }

    return res;
};