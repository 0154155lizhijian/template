/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var constructMaximumBinaryTree = function(nums) {
  return getCurNode(nums, 0, nums.length-1)
};

function getCurNode(nums, low, high){
  // 终止条件
  if(low > high) return null;
  // 找出对应最大值的index和value
  let maxIndex = -1, maxValue = -1;
  for(let i=low; i<=high; i++){
      if(nums[i] > maxValue){
          maxIndex = i;
          maxValue = nums[i];
      }
  }
  // new TreeNode对象，给left， right赋值
  const root = new TreeNode(maxValue);
  root.left = getCurNode(nums, low, maxIndex-1);
  root.right = getCurNode(nums, maxIndex+1, high);
  return root;
}
// @lc code=end

