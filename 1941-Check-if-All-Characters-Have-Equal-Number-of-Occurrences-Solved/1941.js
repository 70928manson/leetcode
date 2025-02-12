/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
    // hash table 紀錄出現次數
    const map = new Map([]);

    for (let i = 0; i < s.length; i++) {
        const value = map.get(s[i]) || 0;
        map.set(s[i], value + 1);
    };

    let firstCount;
    for (const item of map.values()) {
        if (firstCount === undefined) {
            firstCount = item;
        } else if (item !== firstCount) {
            return false;
        };
    };

    return true;
};