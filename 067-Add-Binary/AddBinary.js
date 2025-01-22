/**
    a, b 是 string
    從 a 和 b 的後面往前相加
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let ans = "";

    let i = a.length - 1;
    let j = b.length - 1;

    // 處理進位
    let carry = 0;

    while (i >= 0 || j >= 0) {
        let sum = carry;

        if (i >= 0) sum += parseInt(a[i]);
        if (j >= 0) sum += parseInt(b[j]);

        ans = (sum % 2) + ans;

        carry = Math.floor(sum / 2);  // 無條件捨去

        i--; 
        j--;
    };

    if (carry > 0) {
        ans = carry + ans;
    }

    return ans;
};