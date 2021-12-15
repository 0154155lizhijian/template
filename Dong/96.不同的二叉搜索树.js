/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
let memo = [];
var numTrees = function(n) {
  // memo优化，剔除重复子树
  memo = new Array(n+1).fill(0).map(()=> new Array(n+1).fill(0));
  return build(1,n)
};

// 构造【lo,hi】的递归函数
function build(lo, hi){
  let res = 0;
  // base case，显然当lo > hi闭区间[lo, hi]肯定是个空区间，也就对应着空节点 null，
  // 虽然是空节点，但是也是一种情况，所以要返回 1 而不能返回 0
  if(lo > hi) return 1;
  // 剔除重复子树
  if(memo[lo][hi]){
    return memo[lo][hi];
  }
  for(let i=lo; i<= hi; i++){
    const left = build(lo, i-1);
    const right = build(i+1, hi);
    res += left * right;
  }
  memo[lo][hi] = res;
  return res;
}
// @lc code=end