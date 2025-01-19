/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const ans = [];
    const len = nums.length;

    const set = new Set([]);

    for (const num of nums) {
        if (set.has(num) === false) {
            set.add(num);
        };
    };

    for (let i = 1; i <= len; i++) {
        if (set.has(i) === false) {
            ans.push(i);
        };
    };

    return ans;
};