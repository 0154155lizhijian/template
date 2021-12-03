/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  const dummyNode = new ListNode(-1);
  dummyNode.next = head;
  // 找到pre
  let pre = dummyNode;
  for(let i=0; i< left-1; i++){
    pre = pre.next;
  }
  // 找出right
  let rightNode = pre;
  for (let j = 0; j < right-left+1; j++) {
    rightNode = rightNode.next;
  }
  // left succ
  let leftNode = pre.next;
  let succ = rightNode.next;

  // 切段链接
  pre.next = null;
  rightNode.next = null;
  
  reverseLinkedList(leftNode);
  console.log(dummyNode.next);

   // 接上
   pre.next = rightNode;
   leftNode.next = succ;
   
   return dummyNode.next;
};

const reverseLinkedList = (head) => {
  let pre = null;
  let cur = head;

  while (cur) {
      const next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
  }
}

// @lc code=end

