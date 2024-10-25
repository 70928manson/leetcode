/**
 * 4 - 5 - 1- 9, delete node 5 and change to 4 - 1 - 9
 * 重點不是如何刪除
 * 只要讓被刪除的 node 本身變成下一個 node 即可
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};