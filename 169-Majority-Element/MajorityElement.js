/**
 * Majority Element:  the element that appears more than ⌊n / 2⌋ times.
 * In this question, assume that the majority element always exists in the array 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const hash = {};
    const length = nums.length / 2;  // 比對的長度

    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] === undefined) {
            hash[nums[i]] = 1;
        } else {
            hash[nums[i]]++
        };

        // 若加完後 nums[i] 出現次數大於陣列一半就return
        if (hash[nums[i]] > length) {
            return nums[i]
        };
    };
};