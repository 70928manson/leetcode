/**
 * 不管題目限制, 任性的解法
 * You must solve the problem without modifying the array nums and using only constant extra space.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const seen = new Set();

    for (const num of nums) {
        if (seen.has(num)) {
            return num;
        } else {
            seen.add(num);
        };
    };
};