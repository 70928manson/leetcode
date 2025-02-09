/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    const hash = {};

    while (n !== 1 && hash[n] === undefined) {
        hash[n] = n;
        let temp = 0;

        let a = `${n}`
        for (let i = 0; i < a.length; i++) {
            temp += a[i] * a[i];
        };

        n = temp;
    };

    return n === 1 ? true : false;
};