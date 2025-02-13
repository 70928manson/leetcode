/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function (s, words) {
    let temp = "";

    for (let i = 0; i < words.length; i++) {
        temp += words[i];

        if (temp.length === s.length && temp === s) {
            return true;
        };
    };

    return false;
};