// 1. nums 為數字陣列, target 為從 nums 特定兩個數字相加 (不能同一個數字)
// 2. 回傳特定兩個數字的 index, 不限制順序
// 3. 只會有一個正確解答


const twoSum = function(nums, target) {
    let hash = {};

    for (let i = 0; i < nums.length; i++) {
        // 找hash有沒有相加等於target的數字, 沒有的話存進 hash 繼續找

        let find = target - nums[i];

        if (hash[find] !== undefined) {
            return [hash[find], i]
        }
        
        hash[nums[i]] = i
    }
};