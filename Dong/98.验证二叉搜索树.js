/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function(root) {
  const build = (node, min, max) => {
    if(node === null) return true;
    if(min && node.val <= min.val) return false;
    if(max && node.val >= max.val) return false;
    return build(node.left, min, node) && build(node.right, node, max);
  }
  return build(root, null, null);
};
// @lc code=end

