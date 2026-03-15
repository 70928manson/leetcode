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
var mergeNodes = function (head) {
  const dummy = new ListNode(0);
  let cur = dummy;
  let sum = 0;

  head = head.next; // 跳過第一個 0

  while (head !== null) {
    if (head.val === 0) {
      cur.next = new ListNode(temp);

      cur = cur.next;
      temp = 0;
    } else {
      temp += head.val;
    }

    head = head.next;
  }

  return dummy.next;
};
