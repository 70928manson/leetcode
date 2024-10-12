/**
 * 先用 map 儲存羅馬數字對應的值
 * 思考怎麼處理 IV. IX, XL, XC, CD, CM
 * 最左邊為最大的羅馬數字並依序由右排列, 因此可以假定若遇到 左邊 Roman < 右邊 Roman 情況, 即為 IV. IX, XL, XC, CD, CM
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
            i++;
        } else {
            ans += map[s[i]]
        }
    }

    return ans;
};