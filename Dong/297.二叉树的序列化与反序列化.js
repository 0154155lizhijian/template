/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
 function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}
 function getTreeFromLayerOrderArray(array) {
  let n = array.length;
  if (!n) return null;
  let index = 0;
  let root = new TreeNode(array[index++]);
  let queue = [root];
  while(index < n) {
      let top = queue.shift();
      let v = array[index++];
      top.left = v == null ? null : new TreeNode(v);
      if (index < n) {
          let v = array[index++];
          top.right = v == null ? null : new TreeNode(v);
      }
      if (top.left) queue.push(top.left);
      if (top.right) queue.push(top.right);
  }
  return root;
}

const tree = getTreeFromLayerOrderArray([1,2,3,4,5]);

 /**
  * Encodes a tree to a single string.
  *
  * @param {TreeNode} root
  * @return {string}
  */
 const SPE = ',';
 const END = '#';
 let res = '';
 var serialize = function(root) {
     return traverse(root);
 };
 
 function traverse(root){
     if(root === null){
         res = res.concat(END).concat(SPE);
         return res;
     }
     res = res.concat(root.val).concat(SPE);
     traverse(root.left);
     traverse(root.right);
     return res;
 }
 
 /**
  * Decodes your encoded data to tree.
  *
  * @param {string} data
  * @return {TreeNode}
  */
 var deserialize = function(data) {
    const list = data.split(',');
    console.log(list);
 };

 function reDeserialize(){

 }

 deserialize(serialize(tree));
 
 /**
  * Your functions will be called as such:
  * deserialize(serialize(root));
  */
// @lc code=end

