/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    // 從右到左 開始排列
    for (let j = m+n-1; j >= 0; j--) {
        // 要記得考慮 m 或 n 為 0 後, nums[-1] 的問題, 數字跟 undefined 比對會回傳 false

        if (n === 0 || nums1[m-1] >= nums2[n-1]) {
            nums1[j] = nums1[m-1]
            m--
        } else {
            nums1[j] = nums2[n-1];
            n--
        }
    }

    // 原本是想從左到右排列
    // for (let j = 0; j < m; j++) {
    //     // 若 nums[j] < nums2[i] 繼續前進
    //     // 若 nums[j] >= nums2[i], 插入, i++
    //     // 問題: 怎麼模擬插入的動作
    //     if (...) {
    //           ...
    //     }
    // }
};