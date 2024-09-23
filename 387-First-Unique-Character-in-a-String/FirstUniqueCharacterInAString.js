/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const hash = {}

    // 先把 s 字母出現的次數存進 hash 
    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]] !== undefined) {
            hash[s[i]]++;
        } else {
            hash[s[i]] = 1
        }
    }

    // 再用 for 迴圈遍歷s, 找出第一個只出現一次的字母
    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]] === 1) {
            return i
        }
    }

    // 沒有 non-repeating character 就回傳 -1
    return -1
};