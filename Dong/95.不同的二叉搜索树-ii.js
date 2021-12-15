/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  const build = (lo, hi) => {
    let res = [];
    if(lo > hi){
      res.push(null);
      return res;
    }
    for(let i =lo; i<= hi; i++){
      let leftTree = build(lo, i-1);
      let rightTree = build(i+1, hi);
      for (const left of leftTree) {
        for (const right of rightTree) {
          const root = new TreeNode(i);
          root.left = left;
          root.right = right;
          res.push(root);
        }
      }
    }
    return res;
  }
  return build(1,n);
};
// @lc code=end

