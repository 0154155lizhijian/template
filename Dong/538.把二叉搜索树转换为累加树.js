/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
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
 * @return {TreeNode}
 */
 var convertBST = function(root) {
  let sum = 0;
  const search = (node) => {
      if(node === null) return;
      // 先遍历右边，再遍历左边，进行降序排序，再累加，即可得到累加数
      search(node.right);
      sum += node.val;
      node.val = sum;
      search(node.left);
  }
  search(root);
  return root;
};
// @lc code=end

