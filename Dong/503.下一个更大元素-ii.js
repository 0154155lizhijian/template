/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var nextGreaterElements = function(nums) {
  const res = [];
  const topStack = [];
  const length = nums.length;
  // 碰到环形问题，一般处理方式是把数组长度扩大到两倍，[...arr, ...arr]
  for(let i= length * 2 -1; i>=0; i--){
      while(topStack.length && topStack[topStack.length-1] <= nums[i % length]){
          topStack.pop();
      }
      res[i % length] = topStack.length ? topStack[topStack.length -1] : -1;
      topStack.push(nums[i % length])
  }
  return res;
};
// @lc code=end

