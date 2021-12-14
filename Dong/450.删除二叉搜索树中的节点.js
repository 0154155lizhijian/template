/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (root === null) return null;
  if (root.val === key) {
    // 有一个子节点或者没有子节点
    if (root.left === null) return root.right;
    if (root.right === null) return root.left;
    // 有两个子节点，删除右子树，最小节点
    // 找到最小节点
    getMin = (node) => {
      while (node.left !== null) {
        node = node.left;
      }
      return node;
    };
    const minNode = getMin(root.right);
    // 删除最小节点
    root.right = deleteNode(root.right, minNode.val);
    // 交换target
    minNode.left = root.left;
    minNode.right = root.right;
    root = minNode;
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key);
  }
  return root;
};
// @lc code=end