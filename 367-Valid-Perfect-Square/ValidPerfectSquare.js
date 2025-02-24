/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    for (let i = 1; i <= num; i++) {
        // 提早終止, i * i > num 之後都不會是答案
        if (i * i > num) {
            break;
        };
        if (i*i === num) {
            return true;
        };
    };
    return false;
};