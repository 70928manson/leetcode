/**
 * 
 * 1 <= haystack.length, needle.length <= 104
 * haystack and needle consist of only lowercase English characters.
 * 
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

    // 截字串比對
    const needleLength = needle.length;

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            // const checkSlice = haystack.slice(i, i + needleLength);
            const checkSlice = haystack.substring(i, i + needle.length);

            if (checkSlice === needle) {
                return i
            }
        }
    }

    return -1
};