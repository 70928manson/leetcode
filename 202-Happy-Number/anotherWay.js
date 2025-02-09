/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    const hash = {};

    while (n !== 1 && hash[n] === undefined) {
        hash[n] = n;
        let temp = 0;

        let current = n;
        while (current > 0) {
            let square = current % 10;
            temp += square * square;
            current = Math.floor(current/10);
        }

        n = temp;
    };

    return n === 1 ? true : false;
};