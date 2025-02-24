/**
 * 龜兔賽跑算法 (Floyd's Tortoise and Hare Algorithm)
 * - 這題可以視為在 Linked List 中尋找 cycle 起點
 * - 因為陣列中有重複的數字，所以會形成 cycle
 * - cycle 起點就是重複的數字
 * - 使用快慢指針來找到 cycle 起點
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    // 初始化快慢指針，都從起點出發
    let slow = nums[0];
    let fast = nums[0];

    // **第一階段：找到相遇點 (first meet)**
    // - 慢指針每次走一步
    // - 快指針每次走兩步
    // - 因為快指針跑得快，所以一定會在 cycle 中追上慢指針
    while (true) {
        slow = nums[slow];       // 慢指針走一步
        fast = nums[nums[fast]]; // 快指針走兩步

        // 當快慢指針相遇時，表示存在 cycle
        if (slow === fast) {
            break;
        }
    }

    // **第二階段：找到 cycle 起點 (重複的數字)**
    // - 「從陣列起點走到 cycle 起點的距離」 和 「從 first meet 走到 cycle 起點的距離」 是相同的
    // - 將慢指針移回起點
    // - 快指針留在相遇點
    // - 兩個指針每次各走一步，再次相遇時，就是 cycle 起點
    slow = nums[0]; // 慢指針回到起點
    while (slow !== fast) {
        slow = nums[slow]; // 慢指針走一步
        fast = nums[fast]; // 快指針走一步
    }

    // 相遇的位置就是 cycle 起點，也就是重複的數字
    return slow;
};


/**
    龜兔賽跑算法 (Floyd's Tortoise and Hare Algorithm)
    用於檢測循環 (cycle detection)，且能找到 cycle 的起點。

    問題分析：
    - 必定存在且只有一個重複數字，代表陣列長度為 n，但數字範圍為 1 到 n-1。
    - 重複數字可能會出現多次，ex: [3, 3, 3, 3, 3] 
    - 陣列的數值本身可以視為下一個指標 (index)，因此可以模擬 linked list 的 next 指針。

    為什麼會有 cycle？
    - 由於有重複的數字，因此至少有兩個 index 指向同一個數字，導致鏈結指標出現循環。

    解題思路：
    1. 使用快慢指針 (兔子與烏龜) 來尋找 cycle：
       - 烏龜 (slow) 一次走一步
       - 兔子 (fast) 一次走兩步
       - 若存在 cycle，快指針最終會追上慢指針 (first meet)

    2. 找到 first meet 後：
       - 烏龜回到起點 (nums[0])
       - 兔子留在 first meet 的位置
       - 烏龜與兔子每次都走一步，最終會在 cycle 起點 (duplicate number) 相遇

    為什麼烏龜要回起點？
    - cycle 的起點就是重複的數字
    -「從陣列起點走到 cycle 起點的距離」 和 「從 first meet 走到 cycle 起點的距離」 是相同的
    - 當烏龜回到起點，兔子從 first meet 開始重新跑，因為距離一樣，最終會在 cycle 起點碰面
      - 設：
        - 起點到 cycle 起點距離：a
        - cycle 起點到 first meet 距離：b
        - cycle 長度：c
      - 快指針每次走兩步、慢指針走一步，因此：
        - 2(a + b) = a + b + nc
        - 推導出：a = nc - b
        - 意味著從起點和 first meet 同時出發，每次走一步，會在 cycle 起點相遇。

    時間複雜度：O(n)
    空間複雜度：O(1)
 */
