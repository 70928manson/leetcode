/**
 * 1. 去掉空白
 * 2. 轉成小寫
 * 3. 雙指針左右往中間比對
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // 注意 replace 和 toLowerCase 會返回新字串, 需要賦值給 s
    s = s.replace(/[^\w]/g, '');
    s = s.toLowerCase();

    let leftPointer = 0;
    let rightPointer = s.length - 1;

    while (leftPointer < rightPointer) {
        if (s[leftPointer] !== s[rightPointer]) {
            return false;
        };
        leftPointer++;
        rightPointer--;
    };

    return true;
};