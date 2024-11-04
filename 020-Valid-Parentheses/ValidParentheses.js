/**
 * Topics: Stack
 * 想法: 遍歷 s, 若讀到 Open brackets, unshift 至 checkArr, 若讀到的是 Close brackets, 查看 checkArr 第一個是否是對應組合
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const checkArr = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '{' || s[i] === '[' || s[i] === '(') {
            checkArr.unshift(s[i])
        } else if(s[i] === ")") {
            if (checkArr[0] !== "(") {
                return false
            } else {
                checkArr.shift();
            }
        } else if (s[i] === "}") {
           if (checkArr[0] !== "{") {
                return false
            } else {
                checkArr.shift();
            }
        }else if (s[i] === "]") {
            if (checkArr[0] !== "[") {
                return false
            } else {
                checkArr.shift();
            }
        }
    };

    return checkArr.length === 0;
}