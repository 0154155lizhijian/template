/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
 var buildTree = function(inorder, postorder) {
  return build(inorder, 0, inorder.length-1, postorder, 0, postorder.length-1);
};

function build(inorder, iStart, iEnd, postorder, pStart, pEnd){
  if(iStart > iEnd) return null;
  // 找根节点
  const rootVal = postorder[pEnd];
  // 根节点在中序的位置
  let index = 0;
  for(let i = iStart; i<= iEnd; i++){
      if(inorder[i] === rootVal){
          index = i;
          break;
      }
  }
  // 计算左侧size
  const leftSize = index-iStart;
  // 遍历节点
  const root = new TreeNode(rootVal);
  root.left = build(inorder, iStart, index-1, postorder, pStart, pStart+leftSize-1);
  root.right = build(inorder, index+1, iEnd, postorder, pStart+leftSize, pEnd-1);
  return root; 
}
// @lc code=end

