/**
    prefix 前綴, suffix 後綴
    Return an integer denoting the number of index pairs (i, j) such that i < j
    比對 nums[i] 是否存在於 nums[j] 的前後 
 */

/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) {
    let ans = 0;

    for (let i = 0; i < words.length; i++) {
        for (let j = i+1; j < words.length; j++) {
            if (isPrefixAndSuffic(words[i], words[j])) {
                ans++;
            };
        };
    };

    return ans;
};

const isPrefixAndSuffic = (str1, str2) => {
    const len1 = str1.length;
    const len2 = str2.length;

    if (len1 > len2) return false;
    return str2.substring(0, len1) === str1 && str2.substring(len2 - len1) === str1;
};