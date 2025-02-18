/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
    let ans = "";

    while (columnNumber > 0) {
        /**
            由於 a~z 為 1-based，因此需要先減１變為 0-based
            才不會發生columnNumber % 26 === 0，String.fromCharCode(64) => @ 的狀況
        */
        columnNumber--;

        // 取得當前字母 (A = 65，因此需加 65)
        ans = String.fromCharCode((columnNumber % 26) + 65) + ans;
        columnNumber = Math.floor(columnNumber / 26);
    }

    return ans;
};