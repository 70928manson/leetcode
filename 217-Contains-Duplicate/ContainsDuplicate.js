/**
 * 若陣列中有重複數字 回傳 true, 反之 false
 * 這題可以用 hash table, 但因為看到 duplicate 便用 Set 試試看
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // nums 變成 Set 後, 比較其長度
    return new Set(nums).size !== nums.length
};