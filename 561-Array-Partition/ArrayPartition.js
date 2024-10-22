/**
 * 兩兩配對後找最小, 再把這些最小相加求最大
 * 先由小至大排序, 如此 i 跟 i+1 兩兩配對求的最小值相加後會最大
 */

/**
 * 極限值 / 特殊狀況 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let ans = 0;

    const len = nums.length;
    nums.sort((a, b) => a - b);

    // i 跟 i+1 比完後, i+=2 看下一個配對
    for (let i = 0; i < len; i+=2) {
        ans += Math.min(nums[i], nums[i+1]);
    };

    return ans;
};