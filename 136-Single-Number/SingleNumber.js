/**
 * 有一個 nums 陣列
 * nums 陣列中的數字成對出現, 只有一個例外, 找出那個例外 
 * 限制: You must implement a solution with a linear runtime complexity and use only constant extra space.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const hash = {};

    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] !== undefined) {
            hash[nums[i]]++;
        } else {
            hash[nums[i]] = 1
        };
    };

    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] === 1) {
            return nums[i]
        };
    };
};