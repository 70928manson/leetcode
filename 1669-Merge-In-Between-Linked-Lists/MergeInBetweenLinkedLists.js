/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  // 找到 a - 1 節點
  // 找到 b + 1 節點
  // 把 a ~ b 整段跳過
  // 將 a - 1 接到 list2 頭
  // 再將 list2 尾接到 b + 1
  let head = list1;
  let current = 0;
  let removeBefore = null;
  let removeAfter = null;

  while (head !== null) {
    if (current === a - 1) removeBefore = head;
    if (current === b + 1) {
      removeAfter = head;
      break;
    }
    head = head.next;
    current++;
  }

  removeBefore.next = list2;

  let tail = list2;
  while (tail.next !== null) {
    tail = tail.next;
  }
  tail.next = removeAfter;

  return list1;
};
