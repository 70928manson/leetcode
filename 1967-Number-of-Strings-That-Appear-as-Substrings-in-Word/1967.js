/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    let ans = 0;
    for (const str of patterns) {
        if (word.includes(str)) {
            ans++;
        };
    };

    return ans;
};