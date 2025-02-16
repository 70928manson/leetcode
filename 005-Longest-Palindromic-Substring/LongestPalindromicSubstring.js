/**
    1. 先找出所有可能的子字串
    2. 再快速判斷回文
    3. 避免不必要的字串操作，減少記憶體與時間消耗
 */

/**
    暴力解法 (O(n³))
    - 產生 `s` 中所有可能的子字串
    - 依序檢查是否為回文
    - 記錄最長的回文子字串
    
    優化方向：
    **去除不必要的重複比對**
       - 原本的想法是用 `Set` 記錄已檢查的子字串，以避免重複運算。
       - 但當 `s.length = 1000` 時，仍然 TLE。
       - **改進方式：直接在 `isPalindromic` 內檢查即可，不需要 `Set`。**

    **減少內層迴圈次數**
    - 一般暴力解法內層迴圈是 `for (j = i; j < n; j++)`，這樣會遍歷所有可能的子字串。
       - **優化方法：從 `i + max_p.length` 開始**，這樣可以跳過已知比 `max_p` 短的回文子字串。

    **避免不必要的字串拷貝**
       - `cur += s[j]` 每次迭代都會建立新字串，導致額外的記憶體消耗。
       - **改進方式：使用 `s.slice(i, j+1)`，直接用索引操作原字串，減少記憶體開銷。**

    **直接使用索引比對回文**
       - `isPalindromic` 的原始版本會產生新的子字串來檢查是否回文。
       - **優化方式：傳入 `i, j`，直接在 `s` 上用索引比對，避免額外的字串切片與拷貝。**
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let max_p = s[0];

    for (let i = 0; i < s.length; i++) {
        for (let j = i + max_p.length; j < s.length; j++) {  // 只考慮比 max_p 還長的子字串
            if (s[i] === s[j] && isPalindromic(s, i, j)) {  
                max_p = s.slice(i, j + 1);
            }
        }
    }

    return max_p;
};

function isPalindromic(s, left, right) {
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
