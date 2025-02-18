/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let ans = 0;
    const len = columnTitle.length;
    for (let i = 0; i < len; i++) {
        ans += (columnTitle[i].charCodeAt(0) - 64) * (26 ** (len-i-1));
    };

    return ans;
};