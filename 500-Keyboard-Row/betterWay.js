/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const rows = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

    // 建立字母 -> 所屬行的對應表
    const charToRow = {};

    rows.forEach((row, index) => {
        for (const char of row) {
            charToRow[char] = index;
        }
    });

    return words.filter(word => {
        const upper = word.toUpperCase();

        // 依據 word[0] 假設在哪一行
        const rowIndex = charToRow[upper[0]];

        return [...upper].every(char => charToRow[char] === rowIndex);
    })
};