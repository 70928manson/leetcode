/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // 去掉字串頭尾的空白, 再由最後字母一路讀取直到讀到空白, 並紀錄其長度
    let trimS = s.trim();
    let last = trimS.length - 1;

    let ans = 0;

    for (let i = last; i >= 0; i--) {
        if (trimS[i] === " ") {
            break;
        } else {
            ans++;
        }
    }

    return ans;
};