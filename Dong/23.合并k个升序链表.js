/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  const list = [];
  // 先把链表转化成数组
  for (let i = 0; i < lists.length; i++) {
      let node = lists[i];
      while (node) {
          list.push(node.val);
          node = node.next;
      }
  }
  list.sort((a, b) => a - b);
  const res = new ListNode();
  let now = res;
  // 再把数组转换成链表
  for (let i = 0; i < list.length; i++) {
      now.next = new ListNode(list[i]);
      now = now.next;
  }
  return res.next;
};
// @lc code=end

