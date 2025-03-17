/**
 * 原想法為 for 迴圈時, 依照 pivot 的位置, 將 nums 透過 slice 分為左右兩邊, 並計算左右兩邊的總和, 但這樣的做法會導致時間複雜度為 O(n^2)
 * 後來改成先計算 nums 全部相加起來的 total, 再跑 for 迴圈計算 pivot 左邊的總和, 並比對 total - leftTotal - nums[i] === leftTotal, 這樣的做法時間複雜度為 O(n)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let total = nums.reduce((a, b) => a + b, 0);
    let leftTotal = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (total - leftTotal - nums[i] === leftTotal) {
            return i
        };

        leftTotal += nums[i];
    }

    return -1;
};