/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var flatten = function(root) {
  if(root === null) return root;
  // 展平
  flatten(root.left);
  flatten(root.right);
  // 存储未展开前的值
  const left = root.left;
  const right = root.right;
  // 左边置空，替换右边
  root.left = null;
  root.right = left;
  // 找到最底层的右节点
  let p = root;
  while(p.right !== null){
      p = p.right;
  }
  // 把原本的右节点拼接到展开左边后的树上
  p.right = right;
};
// @lc code=end

