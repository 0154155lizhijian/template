/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function(temperatures) {
  const res = [];
  // stack是一个二维数组，[[温度，天]]
  const stack = [];
  for(let i = temperatures.length-1; i>=0; i--){
      while(stack.length && temperatures[i] >= stack[stack.length-1][0] ){
          stack.pop();
      }
      // 结果是比我大一点的那个温度所对应的天数-我当前的天数
      res[i] = !stack.length ? 0 : stack[stack.length-1][1] - i;
      stack.push([temperatures[i], i]);
  }
  return res;
};
// @lc code=end

