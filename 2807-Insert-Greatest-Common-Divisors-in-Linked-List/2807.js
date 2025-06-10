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
var insertGreatestCommonDivisors = function (head) {
  let cur = head;

  while (cur && cur.next) {
    const gcd = getGreatestCommonDivisor(cur.val, cur.next.val);
    cur.next = new ListNode(gcd, cur.next);
    cur = cur.next.next;
  }

  return head;
};

function getGreatestCommonDivisor(a, b) {
  let small = Math.min(a, b);

  // 從大到小，遇到第一個公因數直接回傳
  for (let i = small; i >= 1; i--) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }

  return 1;
}
