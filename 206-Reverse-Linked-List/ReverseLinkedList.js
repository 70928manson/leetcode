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
var reverseList = function(head) {
    // 反轉前: 1 -> 2 -> 3 -> 4 -> 5 -> null
    // 反轉後: 5 -> 4 -> 3 -> 2 -> 1 -> null

    // 加上 null 作為迴圈中止條件 
    let reverseList = null;
    let current = head;

    while(current !== null) {
        let next = current.next;
        current.next = reverseList;
        reverseList = current;
        current = next;
    };

    return reverseList;
};
