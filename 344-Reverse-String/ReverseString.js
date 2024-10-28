/**
 * 首尾雙指針交換
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let j = s.length - 1;

    for (let i = 0; i < s.length / 2; i++, j--) {
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;
    }
};