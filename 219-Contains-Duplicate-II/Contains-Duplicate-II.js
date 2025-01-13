/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    const hash = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (hash.hasOwnProperty(num) && i - hash[nums[i]] <= k) {
            return true;
        };

        hash[nums[i]] = i;
    };

    return false;
};