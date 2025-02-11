/**
 * @param {number} n
 * @return {number[]}
 */
function countBits(n) {
    const res = [];

    for (let i = 0; i <= n; i++) {
        let count = 0;
        let num = i;

        while (num > 0) {
            // 代表這一位數是 1
            if (num % 2 === 1) {
                count++;
            }
            num = Math.floor(num / 2); // 除以 2
        }

        res.push(count);
    }

    return res;
}