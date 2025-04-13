/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let a = `${num}`;

    while (a.length !== 1) {
        let res = 0;
        for (let i = 0; i < a.length; i++) {
            res += Number(a[i]);
        }
        a = `${res}`;
    }

    return Number(a);
};
