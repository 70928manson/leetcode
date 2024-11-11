/**
 * 用 Bubble Sort 暴力解, run time 20% / memory 63%
 * follow up: 有沒有更好的辦法
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var sortColors = function(nums) {
    let len = nums.length

    // 總共比的次數 (len次)
    for (let i = 0; i < len; i++) {
        // 實做兩兩比較
        for (let j = 0; j < len - i - 1; j++) {
            if (nums[j] > nums[j+1]) {
                let temp = nums[j]
                nums[j] = nums[j+1];
                nums[j+1] = temp;
            }
        }
    }
};