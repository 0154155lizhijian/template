/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  if(s.length % 2 === 1) return false;
  const match = new Map([[')', '('], ['}', '{'], [']', '[']]);
  let stack = [];
  for(c of s){
      if(match.has(c)){
          if(!stack.length || stack[stack.length-1] !== match.get(c)) return false;
          stack.pop();
      }else{
          stack.push(c);
      }
  }
  return !stack.length;
};
// @lc code=end

