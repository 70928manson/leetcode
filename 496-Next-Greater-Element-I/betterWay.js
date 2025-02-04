/**
 * Monotonic Stack + HashMap !!!
 * 使用時機: 需要往前或是往後尋找，下一個比自己大或比自己小的元素就可以使用 monotonic stack
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let ans = [];
    let stack = [];
    let hash = new Map();

    for (let i = 0; i < nums2.length; i++) {
        while (stack.length > 0 && stack[stack.length - 1] < nums2[i]) {
            hash.set(stack.pop(), nums2[i]);  // 彈出並存入 HashMap
        }
        stack.push(nums2[i]);
    }

    for (let i = 0; i < nums1.length; i++) {
        ans.push(hash.get(nums1[i]) ?? -1); // 使用 Nullish Coalescing Operator ?? 處理 undefined
    }

    return ans;
};