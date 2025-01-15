/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    let [first, second, third] = [-Infinity, -Infinity, -Infinity];

    for (let i = 0; i < nums.length; i++) {
        // 若 nums[i] 跟 first, seconde, third 任一值一樣則跳過
        if (nums[i] === first || nums[i] === second || nums[i] === third) continue;
        
        if (nums[i] > first) {
            [first, second, third] = [nums[i], first, second];
        } else if (nums[i] > second) {
            [second, third] = [nums[i], second];
        } else if (nums[i] > third) {
            third = nums[i];
        }
    }
    return third === -Infinity ? first : third;
};