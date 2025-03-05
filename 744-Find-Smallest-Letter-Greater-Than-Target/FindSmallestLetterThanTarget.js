/**
    non-decreasing order => a 到 z 遞增排列
    If such a character does not exist, return the first character in letters

    binary search go go
 */

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let ans = letters[0];

    let start = 0;
    let end = letters.length - 1;
    let mid;

    while (start <= end) {
        mid = Math.floor((start + end) / 2);

        if (letters[mid] > target) {
            ans = letters[mid];
            end = mid - 1;
        } else {
            start = mid + 1;
        };
    };

    return ans;
};