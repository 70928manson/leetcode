/**
 * 將兩個鏈結串列表示的數字相加，並考慮進位
 * 
 * 1. 逐位相加 l1 和 l2 的對應節點值，並加上前一位的進位 carry。
 * 2. 計算當前位的數值 (total % 10) 和新的進位值 (Math.floor(total / 10))。
 * 3. 創建新節點儲存當前位的數值，並將指標移動到下一位。
 * 4. 若 l1、l2 或 carry 仍存在，則繼續運算，直到所有位數處理完畢。
 * 5. 最後記得返回 dummy.next，也就是新 linked list 的 head。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(); 

    let cur = dummy;  // 當前節點，用它建構相加後的 ListNode

    let carry = 0;    // 進位

    while (l1 || l2 || carry) {
        total = carry

        if (l1) {
            total += l1.val;
            l1 = l1.next;
        };

        if (l2) {
            total += l2.val;
            l2 = l2.next;
        };

        let num = total % 10;
        carry = Math.floor(total / 10);

        cur.next = new ListNode(num);
        cur = cur.next;
    };

    return dummy.next;
};