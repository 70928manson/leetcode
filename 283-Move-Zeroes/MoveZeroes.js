/**
 * 一開始的想法為分成左右指針
    左指針遍歷, 只要讀到 0 就跟右指針交換
    但題目要求  maintaining the relative order of the non-zero elements.

    把 0 挑選出來塞到後面有點費功夫

    所以改成 透過 i 跟 j 兩個指針, 起始都在 nums 最前面
    i 負責遍歷, j 去重組 nums, 讀到非 0 就賦值 並 j++
    最後記得根據 j 跟 nums.length 補 0
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[j] = nums[i];
            j++;
        }
    }

    // 補0, 注意 j 會比實際 index 多 1
    for (let i = j; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
};