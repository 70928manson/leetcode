/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for (const word of words) {
        if (isPalindromic(word)) {
            return word;
        };
    };
    
    return "";
};

const isPalindromic = (word) => {
    let left = 0;
    let right = word.length - 1;

    while (left <= right) {
        if (word[left] !== word[right]) {
            return false;
        };
        left++;
        right--;
    };
    
    return true;
};