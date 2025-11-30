/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function (s) {
    if (s.lenght < 2) return "";

    const set = new Set(s);

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        const isUpper = ch === ch.toUpperCase();

        const pair = isUpper ? ch.toLowerCase() : ch.toUpperCase();

        // 若找不到配對字元
        if (!set.has(pair)) {
            // divide and conquer
            const left = longestNiceSubstring(s.slice(0, i));
            const right = longestNiceSubstring(s.slice(i + 1));

            return left.length >= right.length ? left : right;
        }
    }

    // 若全部字元都有配對
    return s;
};
