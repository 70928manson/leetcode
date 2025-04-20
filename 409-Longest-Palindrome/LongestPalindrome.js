/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const map = new Map();

    for (let i = 0; i < s.length; i++) {
        const get = map.get(s[i]);
        if (get) {
            map.set(s[i], get + 1)
        } else {
            map.set(s[i], 1)
        };
    };
    
    let ans = 0;
    let has1 = 0;

    for (const [key, value] of map) {
        if (value % 2 === 0) {
            ans += value;     // 偶數 全可以用
        } else {
            ans += value - 1; // 奇數-1 才可以用
            has1 = 1;         // 中間放一個單字元
        };
    };

    return ans + has1;
};