/**
 * 檢查 pattern 與 s 字串中的單字是否存在一對一的對應關係
 * - pattern 中的每個字母必須唯一對應到 s 中的單字，且反之亦然
 * - 使用 Map 儲存 pattern 與單字的對應
 * - 使用 Set 檢查 pattern 與單字的唯一性，避免重複對應
 */

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    const words = s.split(" ");
    const map = new Map();

    if (pattern.length !== words.length) return false;
    if (new Set(words).size !== new Set(pattern).size) return false;  //避免 pattern = "abba", s = "dog dog dog dog"

    for (let i = 0; i < pattern.length; i++) {
        if (map.has(pattern[i]) && map.get(pattern[i]) !== words[i]) {
            return false;
        };
        map.set(pattern[i], words[i]);
    }
    return true;
};
