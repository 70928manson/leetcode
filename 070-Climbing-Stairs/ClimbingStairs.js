/**
 * @param {number} n
 * @return {number}
 */
// 1 2 3 5 8
var climbStairs = function (n) {
    if (n <= 3) {
        return n;
    };

    let prev1 = 2;
    let prev2 = 3;

    let ans = 0;

    for (let i = 4; i <= n; i++) {
        ans = prev1 + prev2;

        prev1 = prev2;
        prev2 = ans;
    }

    return ans;
};