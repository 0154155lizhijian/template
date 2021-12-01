/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// 思路： A线路 先遍历A，再遍历B，B线路先遍历B，再遍历A当有交点的时候，他们必然相遇，这个点即相遇点
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let p1 = headA; let p2 = headB;
    while(p1 !== p2){
      if(p1 === null){
        p1 = headB;
      }else{
        p1 = p1.next;
      }
      if(p2 === null){
        p2 = headA;
      }else{
        p2 = p2.next;
      }
    }
    return p2;
};
// @lc code=end

