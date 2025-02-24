/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let left = 1;
    let right = num;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let square = mid * mid;

        if (square === num) {
            return mid;
        } else if (square < num) {
            left = mid + 1;
        } else if (square > num) {
            right = mid - 1;
        };
    };

    return false;
};