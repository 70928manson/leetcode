/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 雙指針
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);

    const ans = [];

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;  // 跳過相同的 i 避免重複

        const target = -nums[i];
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[left] + nums[right];
            if (sum > target) {
                right--;
            } else if (sum < target) {
                left++;
            } else if (sum === target) {
                ans.push([nums[i], nums[left], nums[right]]);

                // 記得避免 left, right 重複
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            };
        };
    };

    return ans;
};