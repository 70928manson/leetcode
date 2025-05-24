/**
 * @param {number[]} nums
 * @return {number}
 */

// Given an array of integers nums, return the number of good pairs.
// A pair (i, j) is called good if nums[i] == nums[j] and i < j.
// 範例 nums = [1,2,3,1,1,3], There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
var numIdenticalPairs = function(nums) {
    // 用 map 來記錄每個數字出現的次數
    // 不需要實際找出所有的 good pairs，只需要計算出有多少個好對子就可以了

    const map = {};
    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            map[nums[i]]++;
        } else {
            map[nums[i]] = 1;
        };
    };

    // 計算好對子的數量 => 排列組合
    // 公式為 n * (n - 1) / 2
    for (const key in map) {
        const n = map[key];
        if (n > 1) {
            res += (n * (n - 1)) / 2;
        };
    };

    return res;
};