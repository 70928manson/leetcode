/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    // 最大的三個數字（用來計算最大的三個正數相乘）
    let [max1, max2, max3] = [-Infinity, -Infinity, -Infinity];

    // 最小的兩個數字（用來計算最小的兩個負數與最大正數相乘）
    let [min1, min2] = [Infinity, Infinity];

    for (const num of nums) {
        // 更新前三大的數字
        if (num > max1) {
            [max1, max2, max3] = [num, max1, max2];
        } else if (num > max2) {
            [max2, max3] = [num, max2];
        } else if (num > max3) {
            max3 = num;
        }

        // 更新最小的兩個數字
        if (num < min1) {
            [min1, min2] = [num, min1];
        } else if (num < min2) {
            min2 = num;
        }
    }

    // 最大的三個數字相乘 vs. 兩個負數與最大數相乘
    return Math.max(max1 * max2 * max3, min1 * min2 * max1);
};
