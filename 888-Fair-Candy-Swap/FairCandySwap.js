/**
    這題的意思是找兩位哪個 box 可交換某個值後達成平衡
    本質: 找出 A[i] 和 B[j]，使得交換後 sum(A) == sum(B)

    先計算 Alice 和 Bob 的糖果總數
    計算交換前 Alice 比 Bob 多（或少）的總數 delta
    這表示 Alice 需要給出 delta 大小的糖果，並從 Bob 拿回相同大小的糖果。

    利用 Set 優化查找
    先將 bobSizes 存入 Set，方便快速查找某個糖果是否存在。
    遍歷 aliceSizes，對每顆糖果 a，檢查 Bob 是否有糖果 b = a - delta，若存在就回傳 [a, b]。
 */

/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function (aliceSizes, bobSizes) {
    let aliceTotal = aliceSizes.reduce((acc, cur) => acc + cur, 0);
    let bobTotal = bobSizes.reduce((acc, cur) => acc + cur, 0);

    const delta = (aliceTotal - bobTotal) / 2;  // Alice 需要給出的數量

    const bobSet = new Set(bobSizes);

    for (let a of aliceSizes) {
        const b = a - delta;  // 計算 Bob 需要交換的糖果
        if (bobSet.has(b)) {
            return [a, b];
        }
    }
};
