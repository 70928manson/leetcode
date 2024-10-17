/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // 快慢指針: i / j

    // 透過 i 組成 不重複陣列, j 用來遍歷 nums
    // i 只有不重複時才會動, j 一直動

    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        // 若 nums[i] === nums[j], 代表遇到相同元素, i 停留, j 繼續走
        // 若 nums[i] !== nums[j], 代表不是相同的, nums[i+1] = nums[j] and i++, j繼續走
        if (nums[i] !== nums[j]) {
            nums[i+1] = nums[j];
            i++;
        }
    }

    return i + 1;
};