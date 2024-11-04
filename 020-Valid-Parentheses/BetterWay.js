/**
 * Topics: Stack
 * 原想法: 遍歷 s, 若讀到 Open brackets, unshift 至 checkArr, 若讀到的是 Close brackets, 查看 checkArr 第一個是否是對應組合
 * 問題: unshift 效能為 O(n)
 * 改進: 改成 push O(1), 透過 pop 刪除陣列最後的值且會回傳, 拿來比對是否對應組合; 透過 current 記 s[i], 避免每次都要重新找值
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const checkArr = [];
    for (let i = 0; i < s.length; i++) {
        const current = s[i];
        if (current === '{' || current === '[' || current === '(') {
            checkArr.push(s[i])
        } else if(current === ")") {
            if (checkArr.pop() !== "(") {
                return false
            }
        } else if (current === "}") {
            if (checkArr.pop() !== "{") {
                return false
            }
        }else if (current === "]") {
            if (checkArr.pop() !== "[") {
                return false
            }
        }
    };

    return checkArr.length === 0;
}