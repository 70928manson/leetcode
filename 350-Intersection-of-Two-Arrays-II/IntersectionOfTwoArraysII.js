/**
 * 使用 hash map
 * 先記 nums1 出現的 integer 以及其次數
 * 在遍歷 nums2, 若 nums2[j] 有在 hashMap, 代表其是 Intersection of Two Arrays
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const ans = [];
    const hash = {};

    for (let i = 0; i < nums1.length; i++) {
        if (hash[nums1[i]] === undefined) {
            hash[nums1[i]] = 1;
        } else {
            hash[nums1[i]]++;
        };
    };

    for (let j = 0; j < nums2.length; j++) {
        if (hash[nums2[j]] !== undefined && hash[nums2[j]] > 0) {
            hash[nums2[j]]--;
            ans.push(nums2[j]);
        }
    };

    return ans;
};