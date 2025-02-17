/**
   Expand Around Center
   以一個或兩個字元當作中心，向左右擴展檢查
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length === 1) return s;

    let start = 0; // 最長 palindromic 的開始位置
    let maxL = 0;  // 最長 palindromic 的長度

    // s 長度可能為奇數或偶數，中心擴展位置會因此不同
    for (let i = 0; i < s.length; i++) {
        isPalindromic(s, i, i);           // 奇數狀況, 以 (i, i) 為中心
        isPalindromic(s, i, i + 1);       // 偶數狀況, 以 (i, i+1) 為中心
    };

    return s.slice(start, start + maxL);

    function isPalindromic(s, left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        };

        // 退出 while 時，left 和 right 分別指向回文範圍外的位置，記得需要調整回來
        let len = right - left - 1;
        if (len > maxL) {
            maxL = len;
            start = left + 1;
        }
    }
};