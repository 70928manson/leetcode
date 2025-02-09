/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const ans = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            if (ans.length === 0) {
                ans[0] = i;
                ans[1] = i;
            } else {
                ans[1] = i;
            }
        }
    }

    return ans.length > 0 ? ans : [-1, -1];
};