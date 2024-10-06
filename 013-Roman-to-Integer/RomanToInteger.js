/**
 * 先用 map 儲存所有羅馬數字對應的值, 包括 IV. IX, XL, XC, CD, CM
 * 找值時先兩個看, 如果不是 IV. IX, XL, XC, CD, CM 其中之一, 在一個
 */


/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let ans = 0;

    for (let i = 0; i < s.length; i++) {
        const check = s[i] === "I" | s[i] === "X" | s[i] === "C";

        if (check && map[s[i]] < map[s[i+1]]) {
            ans = ans + map[s[i+1]] - map[s[i]];
            i++
        } else {
            ans += map[s[i]]
        }
    }

    return ans;
};