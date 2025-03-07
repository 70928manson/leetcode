/**
    All the characters of jewels are unique.
    jewels 轉為 Set, 並遍歷 stones 對照 Set, 查看該 item 是否為 jewel
 */

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const jewelSet = new Set(jewels);

    let ans = 0;
    for (const item of stones) {
        if (jewelSet.has(item)) {
            ans += 1;
        };
    };

    return ans;
};