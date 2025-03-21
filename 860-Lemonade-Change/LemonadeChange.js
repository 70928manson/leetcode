/**
    一開始想法只用 toal 來記錄「總金額」，但這題需要確保「有合適的面額來找錢」，不只是錢夠就行。
    應該追蹤紀錄 $5 和 $10 鈔票的數量，而不是只用 total 紀錄總金額。
 */

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    let five = 0, ten = 0;

    for (const bill of bills) {
        if (bill === 5) {
            five++;
        } else if (bill === 10) {
            if (five === 0) return false;

            ten++;
            five--;
        } else if (bill === 20) {
            if (ten > 0 && five > 0) {
                ten--;
                five--;
            } else if (five >= 3) {
                five -= 3;
            } else {
                return false;
            };
        };
    };

    return true;
};