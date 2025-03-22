/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    // const symbols = new Set(["!", "?", "'", ",", ";", "."])
    // const words = paragraph.toLowerCase().replace(/[^a-z]/g, " ").split(" ").filter(Boolean);

    // \W => [^a-zA-Z0-9_] 的簡寫
    // + 為匹配 1 次或多次，確保連續的非單詞字符會被視為一個整體
    const words = paragraph.toLowerCase().split(/\W+/g).filter(Boolean);
    const map = new Map();
    const bannedSet = new Set(banned);

    for (const word of words) {
        if (bannedSet.has(word) === false) {
            if (map.has(word)) {
                map.set(word, map.get(word) + 1); // 取出當前值 +1，再存回去
            } else {
                map.set(word, 1)
            };
        };
    };

    // 找出出現次數最多的 word
    let count = 0;
    let frequent  = "";

    for (const [key, value] of map) {
        if (value > count) {
            count = value;
            frequent  = key;
        };
    }

    return frequent ;
};