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
 const END = '#';
 /**
  * Encodes a tree to a single string.
  *
  * @param {TreeNode} root
  * @return {string}
  */
 // 前序遍历
//  var serialize = function(root) {
//      const result = traverse(root, []);
//      return result.join()
//  };
 
//  function traverse(root, res){
//      if(root == null){
//          res.push(END);
//          return res;
//      };
//      res.push(root.val);
//      traverse(root.left, res);
//      traverse(root.right, res);
//      return res;
//  }
 
//  /**
//   * Decodes your encoded data to tree.
//   *
//   * @param {string} data
//   * @return {TreeNode}
//   */
//  var deserialize = function(data) {
//      const list = data.split(',');
//      return retree(list);
//  };
 
//  function retree(data){
//      if(!data.length) return null;
//      if(data[0] === END){
//          data.shift();
//          return null;
//      }
//      const root = new TreeNode(data[0]);
//      data.shift();
//      root.left = retree(data);
//      root.right = retree(data);
//      return root;
//  };


 // 后序遍历
//  const END = '#';
// /**
//  * Encodes a tree to a single string.
//  *
//  * @param {TreeNode} root
//  * @return {string}
//  */
// var serialize = function(root) {
//     const result = traverse(root, []);
//     return result.join()
// };

// function traverse(root, res){
//     if(root == null){
//         res.push(END);
//         return res;
//     };
//     traverse(root.left, res);
//     traverse(root.right, res);
//     res.push(root.val);
//     return res;
// }

// /**
//  * Decodes your encoded data to tree.
//  *
//  * @param {string} data
//  * @return {TreeNode}
//  */
// var deserialize = function(data) {
//     const list = data.split(',');
//     return retree(list);
// };

// function retree(data){
//     if(!data.length) return null;
//     if(data[data.length-1] === END){
//         data.pop();
//         return null;
//     }
//     const root = new TreeNode(data[data.length-1]);
//     data.pop();
//     root.right = retree(data);
//     root.left = retree(data);
//     return root;
// };
 
// 层级遍历
 var serialize = function(root) {
    if(!root) return '';
    const result = ser(root);
    return result.join();
 };

 function ser(root){
    const res = [];
    const queue = [root];
    while(queue.length){
        const top = queue.shift();
        if(!top){
            res.push(END);
            continue;
        }
        res.push(top.val);
        queue.push(top.left, top.right);
    }
    return res;
 }


 var deserialize = function(data) {
    if(!data) return null;
    const list = data.split(',');
    const len = list.length;
    const root = new TreeNode(list[0]);
    const queue = [root];
    for (let i = 1; i < len;) {
        const node = queue.shift();
        const left = list[i++];
        if(left !== END){
            node.left = new TreeNode(left);
            queue.push(node.left);
        }else{
            node.left = null;
        }
        const right = list[i++];
        if(right !== END){
            node.right = new TreeNode(right);
            queue.push(node.right);
        }else{
            node.right = null;
        }
    }
    return root;
};


 /**
  * Your functions will be called as such:
  * deserialize(serialize(root));
  */
// @lc code=end

