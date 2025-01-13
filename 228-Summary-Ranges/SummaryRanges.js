/**
 * 將 sorted unique integer array 中的連續範圍表示為 "a->b" 格式。
 * 
 * 範例：
 * 輸入: [0, 1, 2, 4, 5, 7]
 * 輸出: ["0->2", "4->5", "7"]
 * 
 */

/**
 * @param {number[]} nums 
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let i = 0;
    const ans = [];

    while (i < nums.length) {
        let string = `${nums[i]}`; 
        let temp = "";

        // 檢查當前數字與下一個數字是否連續
        while (nums[i] + 1 === nums[i + 1]) {
            i++;
            temp = `->${nums[i]}`;
        }

        string += temp;

        ans.push(string);

        i++;
    }

    return ans;
};
