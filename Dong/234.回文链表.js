/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
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
  let slow = head;
  let fast = head;
  while(fast !== null && fast.next !== null){
      slow = slow.next;
      fast = fast.next.next;
  }
  if(fast !== null){
      slow = slow.next;
  }
  let left = head;
  let right = revert(slow);
  while(right != null){
      if(right.val != left.val){
          return false;
      }
      right = right.next;
      left = left.next;
  }
  return true;
};

const revert = (head) => {
  let pre = null;
  let cur = head;
  while(cur){
      const next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
  }
  return pre;
}
// @lc code=end

