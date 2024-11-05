/**
 * binary search
 * 初始設定startIndex 0, endIndex 最後
 * 用 start ~ end 範圍中間的值與 target 做比對
 * 若小於 target, startIndex 變成 middleIndex , 大於 target 則 endIndex 變成 middleIndex
 * 重複直到 nums[middleIndex] 等於 target
 * 
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let startIndex = 0;
    let endIndex = nums.length - 1;

    while (startIndex + 1 < endIndex) {
        let middleIndex = Math.floor((startIndex + endIndex) / 2);

        if (nums[middleIndex] < target) {
            startIndex = middleIndex
        } else if (nums[middleIndex] > target) {
            endIndex = middleIndex
        } else {
            return middleIndex;
        }
    }

    return -1;
};