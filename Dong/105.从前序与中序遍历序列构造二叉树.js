/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
  return build(preorder, 0, preorder.length-1, inorder, 0, inorder.length-1);
};

function build(preorder, pS,pE, inorder, iS, iE ){
  // base case
  if(pS > pE) return null;
  // 前序遍历的第一个节点就是头节点
  const rootNodeValue = preorder[pS];
  // 找到头结点在中序遍历的下标
  let index = 0;
  for(let i=iS; i<=iE; i++){
      if(inorder[i] === rootNodeValue){
          index=i;
          break;
      }
  }
  // 左边字🌲大小
  const leftSize = index-iS;
  // 构造node，递归拿到左右节点
  const rootNode = new TreeNode(rootNodeValue);
  rootNode.left = build(preorder,pS+1,pS+leftSize,inorder,iS,index-1);
  rootNode.right = build(preorder,pS+leftSize+1,pE,inorder,index+1,iE);
  return rootNode;
}
// @lc code=end

