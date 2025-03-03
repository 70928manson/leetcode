/**
 * 找出 height 每個位置的最大左邊和最大右邊，判斷該位置是否積水，並計算總積水量
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let res = 0;

    // 由左至右，計算每個位置左側的最高高度
    let maxLeftArr = [];
    let tempL = 0;
    for (let i = 0; i < height.length; i++) {
        tempL = Math.max(tempL, height[i - 1] || 0);
        maxLeftArr[i] = tempL;
    };

    // 由右至左，計算每個位置右側的最高高度
    let maxRightArr = [];
    let tempR = 0;
    for (let j = height.length - 1; j >= 0; j--) {
        tempR = Math.max(tempR, height[j+1] || 0);
        maxRightArr[j] = tempR;
    };

    // 判斷是否有積水(左右是否高於 height[z]), 並計算積水量
    for (let z = 0; z < height.length; z++) {
        let minHeight = Math.min(maxLeftArr[z], maxRightArr[z]);
        if (minHeight > height[z]) {
            res += minHeight - height[z];
        };
    };

    return res;
};