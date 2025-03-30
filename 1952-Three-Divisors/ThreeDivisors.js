/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
    if (n <= 3) return false;

    let count = 2;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            count++;
        };

        if (count > 3) {
            return false;
        };
    };

    return count === 3;
};