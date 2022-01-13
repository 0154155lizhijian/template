/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
   // 若自己是最小的，则子序列长度为1；
  const dp  = new Array(nums.length).fill(1);
  // 遍历子序列
  for(let i=1; i< nums.length; i++){
      // 在第i个搜索前面的子序列长度
      for(let j=0; j<i; j++){
          // 找到比自己小的
          if(nums[i] > nums[j]){
              // 取子序列的最大子序列+1
              dp[i] = Math.max(dp[i], dp[j]+1)
          }
      }
  }
  // dp是一个长度数组，输出最大值
  return Math.max(...dp);
};
// @lc code=end

