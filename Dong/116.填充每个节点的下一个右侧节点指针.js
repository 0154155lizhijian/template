/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
/**
 * @param {Node} root
 * @return {Node}
 */
 var connect = function(root) {
  if (root == null) return root;
  connectAll(root.left, root.right);
  return root;
};

function connectAll(left, right){
  if(left === null || right === null){
      return null;
  }
  left.next = right;
  connectAll(left.left, left.right);
  connectAll(right.left, right.right);
  connectAll(left.right, right.left);
}
// @lc code=end

