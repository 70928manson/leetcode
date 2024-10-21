/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let len = m + n - 1;
    m--; n--;

    // 注意這邊得 for 迴圈條件, 由於不會管 m 和 n 是否為 0, 因此要針對這狀況做處理

    for (let j = len; j >= 0; j--) {
        if (m < 0) {
            nums1[j] = nums2[n--];
        } else if (n < 0) {
            nums1[j] = nums1[m--];
        } else if (nums1[m] >= nums2[n]) {
            nums1[j] = nums1[m--];
        } else {
            nums1[j] = nums2[n--];
        }
    }

};