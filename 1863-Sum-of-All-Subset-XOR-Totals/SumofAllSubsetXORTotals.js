/**
  把「選/不選」用二進位表示

  1. 子集數量為 2^n（n 是陣列長度），因為每個元素都有「選 / 不選」兩種可能
     例：n=3 → 總共有 8 種子集（包含空集合）

  2. 我們用一個整數 mask 也就是 bitmask（位元遮罩） 來表示「這次要選哪些元素」
     mask 從 1, 2, 3 .... 2^n 要怎麼代表子集
     - 不是看十進位，而是把 mask 轉成「二進位」代表子集
     - ex:　nums = [a, b, c], mask=5 → 二進位是 101 → 表示「選第 0 位和第 2 位」 → 子集 = [a, c]
  
  3. (1 << n) 等於 2^n

  4. XOR =>　用 ^ 運算子

  5. 為什麼要 (mask & (1 << i) )
     舉例
     假設我想知道「子集裡有沒有包含 nums 第 1 個元素 (b)」，我就要檢查 mask 的第 1 位
     (1 << 1) = 0010
     拿 mask 去做 AND：mask & 0010
     如果 mask 的第 1 位是 1 ⇒ mask & 0010 ≠ 0
     如果 mask 的第 1 位是 0 ⇒ mask & 0010 = 0
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
    const n = nums.length;
    let total = 0;

    // 枚舉所有可能性 2^n
    // 決定這次要算哪一個子集
    for (let mask = 0; mask < (1 << n); mask++) {
        let subsetXor = 0;

        // 檢查 nums 的每個元素，確認「在這個子集裡有沒有出現」
        for (let i = 0; i < n; i++) {

            // 把子集 mask 跟 nums 比對, 確認那些數字有在子集並用 XOR 運算  
            if (mask & (1 << i)) {
                subsetXor ^= nums[i];
            }
        }
        total += subsetXor;
    }


    return total;
};