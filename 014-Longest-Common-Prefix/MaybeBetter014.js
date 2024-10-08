/**
 * 透過 reduce 兩兩比對求出 common prefix
 */

/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
    return strs.reduce((a, b) => getSameStr(a, b));
};

// 兩兩比對方法
function getSameStr(a, b) {
    let res = '';

    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i]) {
            res += a[i];
        } else {
            return res;
        };
    };

    return res;
}