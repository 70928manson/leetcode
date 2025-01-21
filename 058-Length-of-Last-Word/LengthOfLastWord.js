/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // 先去掉前後空白, 再用 split 分組
    let arr = s.trim().split(" ");
    return arr[arr.length - 1].length;
};