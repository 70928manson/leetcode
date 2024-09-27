// 判斷 t 是不是 s 的 anagram(單字重組，組成新的單字或片語，並且所有字母都要被使用且數量不變)

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // 長度不同一定錯
    if (s.length !== t.length) {
        return false;
    };

    const obj = {};

    // 先紀錄 s 用到的字母
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] === undefined) {
            obj[s[i]] = 1
        } else {
            obj[s[i]]++;
        }
    };

    // 比對 t 跟 obj, 查看是否有 undefined 或數量對不上的狀況
    for (let i = 0; i < t.length; i++) {
        if (obj[t[i]] === undefined) {
            return false
        } else if (obj[t[i]] <= 0) {
            return false
        } else {
            obj[s[i]]--;
        }
    };
    
    return true
};