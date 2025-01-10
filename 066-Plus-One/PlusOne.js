/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        let last = digits[i];

        // 一般狀況, 最後一位 +1 後直接 return
        if (last < 9) {
            digits[i] += 1;
            return digits;
        }

        // 進位狀況, 變成 0 後繼續檢查下一個
        if (last === 9) {
            digits[i] = 0;
        }
    }
    return [1, ...digits]
};