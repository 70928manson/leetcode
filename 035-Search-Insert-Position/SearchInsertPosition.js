/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const find = nums.indexOf(target);

    if (find !== -1) {
        return find;
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < target) {
            return i+1;
        }
    }

    // nums 全都大於 target 的狀況, 在 index 0 插入
    return 0;
}; 