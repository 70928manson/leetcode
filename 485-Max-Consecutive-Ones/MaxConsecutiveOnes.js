/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let count = 0;

    let temp = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            temp++;
            if (temp > count) {
                count = temp;
            };
        } else {
            temp = 0;
        };
    };

    return count;
};