/**
    雙指針 left, right
    指針移動邏輯：總是移動 left, right 高度較低的一側，因為只有增加較矮邊的高度才有可能獲得更大的容量。
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let res = 0;

    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        let area = Math.min(height[left], height[right]) * (right - left);
        res = Math.max(area, res);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        };
    };
    
    return res;
};