/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const res = [];
  const bucket = [];
  const backtrack = (start, bucket) => {
      // base case
      if(bucket.length === k){
          res.push([...bucket]);
          return;
      }
      for(let i = start; i <= n; i++){
          // 做选择
          bucket.push(i);
          backtrack(i+1, bucket);
          // 撤销
          bucket.pop();
      }
  };
  backtrack(1, bucket);
  return res
};
// @lc code=end

