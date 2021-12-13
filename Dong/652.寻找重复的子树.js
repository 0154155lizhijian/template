/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
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
 * @return {TreeNode[]}
 */
 var findDuplicateSubtrees = function(root) {
  const res = [], subTreeMap = new Map(); // 子树和对应的次数
  const getSubTree = (subRoot) => {
      if(subRoot === null) return '#'; // 终止标记
      const left = getSubTree(subRoot.left);
      const right = getSubTree(subRoot.right);
      /**后序遍历 */
      const subTree = `${left},${right},${subRoot.val}`; // 子树序列化, 后序遍历
      if(subTreeMap.get(subTree) === 1) res.push(subRoot);  // 出现过一次，则输出结果list
      subTreeMap.set(subTree, (subTreeMap.get(subTree) || 0)+1 ); // 存储到hashmap
      return subTree;
  }
  getSubTree(root);
  return res;
};
// @lc code=end

