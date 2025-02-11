/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var deleteDuplicates = function (head) {
    let current = head;

    while (current.next) {
        if (current.val === current.next.val) {
            // 跳過重複節點
            current.next = current.next.next;
        } else {
            // 若非重複則移動指標
            current = current.next;
        }
    };

    // 回傳 remove duplicate 後的 head, 不是 current
    return head;
};