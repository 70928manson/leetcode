/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // nums 有幾個數字
    let len = nums.length;

    const hash = {};

    for (const num of nums) {
        if (hash[num] === undefined) {
            hash[num] = num;
        }
    }

    for (let i = 0; i < len; i++) {
        if (hash[i] === undefined) {
            return i;
        };
    };
    
};