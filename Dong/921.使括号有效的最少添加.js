/*
 * @lc app=leetcode.cn id=921 lang=javascript
 *
 * [921] 使括号有效的最少添加
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
 var minAddToMakeValid = function(s) {
  const match = new Map([[')', '(']]);
  const stack = [];
  for( c of s){
      if( stack.length && match.get(c) === stack[stack.length-1] ){
          stack.pop();
      }else{
          stack.push(c);
      }
  }
  return stack.length;
};
// @lc code=end

