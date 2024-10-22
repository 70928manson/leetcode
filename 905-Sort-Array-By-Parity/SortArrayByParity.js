/**
 * nums 為 integer array, 長度 1~5000, 裡面 integer 範圍 0~5000
 * 偶數放左邊 積數放右邊 不用管順序
 * 注意0為偶數
 */

/**
 * 極限值 / 特殊狀況
 * - 可能會有一樣的值 [1, 2, 1]
 * - 只有一個值 [0], [1]
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    const ans = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            ans.unshift(nums[i]);
        } else {
            ans.push(nums[i]);
        };
    }

    return ans
};