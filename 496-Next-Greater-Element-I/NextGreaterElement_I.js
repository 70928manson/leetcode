/**
 *  暴力解
    先找 nums1[i] 在 nums2 的位置
    接著看他右邊之後有沒有出現第一個比較大的數字
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let ans = [];
    for (let i = 0; i < nums1.length; i++) {
        let flag = false;
        let index = nums2.indexOf(nums1[i]);

        for (let j = index; j < nums2.length; j++) {
            if (nums2[j] > nums2[index]) {
                ans.push(nums2[j]);
                flag = true;
                break;
            }
        }

        if (flag === false) {
            ans.push(-1);
        };
    }
    return ans;
};