/**
* nums1, nums2 先 sort 排序
* 再用雙指針找出交集  
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    nums1 = nums1.sort((a, b) => a - b);
    nums2 = nums2.sort((a, b) => a - b);

    const ans = [];
    let i = 0;
    let j = 0;
    let nums1Length = nums1.length;
    let nums2Length = nums2.length;

    while (i < nums1Length && j < nums2Length) {
        // 相同交集
        if (nums1[i] === nums2[j]) {
            ans.push(nums1[i]);
            i++;
            j++;
        }

        // 不相同的話, 較小的指針右移
        if (nums1[i] > nums2[j]) {
            j++;
        }
        if (nums2[j] > nums1[i]) {
            i++;
        }
    }

    return ans;
};