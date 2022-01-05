/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
var minDepth = function(root) {
  if (root == null) return 0;
  const queue = [root];
  let deep = 1;
  while(queue.length){
    const n = queue.length;
    for(let i = 0; i<n; i++){
      const cur = queue.shift();
      if(!cur.left && !cur.right){
        return deep;
      }
      if(cur.left){
        queue.push(cur.left);
      }
      if(cur.right){
        queue.push(cur.right);
      }
    }
    // 重点，步数更新
    deep++;
  }
  return deep;
};
// @lc code=end

