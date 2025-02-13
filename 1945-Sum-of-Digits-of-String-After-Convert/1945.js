/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// 超級暴力解
var getLucky = function (s, k) {
    let convertString = "";
    for (let i = 0; i < s.length; i++) {
        convertString += s[i].charCodeAt(0) - 96
    };

    let num = 0;
    for (let i = 0; i < k; i++) {
        if (num > 0) num = 0;

        for (let j = 0; j < convertString.length; j++) {
            num += Number(convertString[j])
        }

        convertString = String(num);
    };

    return num;
};