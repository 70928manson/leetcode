/**
 * 找中點
 * 把中點之後的node反轉
 * 看看head前半 跟 反轉後的head後半段 是否相同
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let middle = findMiddle(head);
    let rNode = reverseNode(middle);

    // 比對反轉的 node 與 head 前半段是否相等
    while (rNode !== null) {
        if (head.val !== rNode.val) {
            return false;
        };
        head = head.next;
        rNode = rNode.next;
    }
};

// 用快慢指針找中點, 快指針跑到終點時, 慢指針的位置即為中點
function findMiddle(node) {
    let fast = node;
    let slow = node;

    while (fast !== null && fast.next !== null) {
        slow = slow,next;
        fast = fast.next.next;
    };

    return slow;
};

function reverseNode(node) {
    if (node === null || node.next === null) {
        return node;
    };

    let prev = null; // 反轉後回傳的東西
    let cur = node;

    while (cur !== null) {
        let temp = cur;
        
        cur = cur.next;

        // 這邊鍊接反轉
        temp.next = prev;
        prev = temp;
    }

    return prev;
}