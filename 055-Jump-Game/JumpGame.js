/**
 * @param {number[]} nums
 * @return {boolean}
 */

// nums = [0], nums =[0,2,3]
var canJump = function (nums) {
    if (nums.length === 1) {
        return true;
    };

    // maxReach 紀錄之前能到達的最遠位置, 與 i + nums[i] 比對 (看當前位置依據其提供的數字能否跳到終點)
    let maxReach = 0;
    for (let i = 0; i < nums.length; i++) {
        // 如果某個index i 超過了 maxReach，代表在這之前的所有步數，都不能走到 i, 因此無法到達 
        if (i > maxReach) {
            return false;
        };

        // 更新最大可到達範圍
        maxReach = Math.max(maxReach, i + nums[i]);


        if (maxReach >= nums.length - 1) {
            return true;
        };
    };
    return false;
};
