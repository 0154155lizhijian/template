/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

 let succ = null;
 /**
  * @param {ListNode} head
  * @param {number} left
  * @param {number} right
  * @return {ListNode}
  */
 var reverseBetween = function(head, left, right) {
     // // 迭代
     // const dummyNode = new ListNode(-1);
     // dummyNode.next = head;
     // let preNode = dummyNode;
     // for(let i =0; i<left-1; i++){
     //     preNode = preNode.next;
     // }
     // let rightNode = preNode;
     // for(let j=0; j<=right-left; j++){
     //     rightNode = rightNode.next;
     // }
     // let leftNode = preNode.next;
     // let afterNode = rightNode.next;
 
     // // 截断
     // preNode.next = null;
     // rightNode.next = null;
     // //反转
     // revertreCuring(leftNode);
     // // 接上
     // preNode.next = rightNode;
     // leftNode.next = afterNode;
 
     // return dummyNode.next;
     // 递归
     if(left ===1){
         return revertN(head, right);
     }
     // 往前移动，移动到第一个再反转；
     head.next = reverseBetween(head.next, left-1, right-1);
     return head;
 
     
 };
 
 function revertN(head, right){
     if(right === 1){
         succ = head.next;
         return head;
     }
     const last = revertN(head.next, right-1);
     head.next.next = head;
     head.next = succ;
     return last;
 }
 
 
 // 迭代反转
 const revert = function (Node){
     let pre = null;
     let cur = Node;
     while(cur){
         const next = cur.next;
         cur.next = pre;
         pre = cur;
         cur = next;
     }
 }
 
 // 递归反转
 const revertreCuring = function(Node){
     if(Node == null || Node.next == null) return Node;
     const last = revertreCuring(Node.next);
     Node.next.next = Node;
     Node.next = null;
     return last;
 }