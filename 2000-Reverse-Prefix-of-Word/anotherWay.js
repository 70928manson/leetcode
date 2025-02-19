/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */

var reversePrefix = function(word, ch) {
    const index = word.indexOf(ch);

    let result = "";
    for (let i = index; i >=0; i--) {
        result += word[i]
    };

    for (let j = index+1; j < word.length; j++) {
        result += word[j];
    };

    return result;
};
