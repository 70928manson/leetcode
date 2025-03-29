/**
 * num 只要後面為 0 (能被 10 整除), 在 reverse 後就會失去 0
 */

/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    return num % 10 === 0 && num !== 0 ? false : true;
};