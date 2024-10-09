/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode();
    
    let cur = dummy; // 指標

    // 只要 list1 跟 list2 還沒到盡頭就繼續跑
    while (list1 && list2) {
        // 比較 list1 與 list2 的 val, 把較小的值 連接到 dummy
        if (list1.val > list2.val) {
            cur.next = list2;
            list2 = list2.next;
        } else {
            cur.next = list1;
            list1 = list1.next;
        }

        cur = cur.next;
    };

    // 處理剩餘的節點
    cur.next = list1 || list2;

    return dummy.next;
};