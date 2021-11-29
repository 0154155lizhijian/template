/*
 * @lc app=leetcode.cn id=1081 lang=javascript
 *
 * [1081] 不同字符的最小子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
/**
 * @param {string} s
 * @return {string}
 */
 var smallestSubsequence = function(s) {
  const stack = new Array();
  const initStack = new Array(256).fill(0);
  const count = new Array(256).fill(0);
  for(a of s){
      count[a.charCodeAt(0)] ++;
  }
  
  for(i of s){
      count[i.charCodeAt(0)]--;
      if(initStack[i.charCodeAt(0)]) continue;
      while(stack.length && stack[stack.length-1].charCodeAt(0) > i.charCodeAt(0) ){
          if(count[stack[stack.length-1].charCodeAt(0)] === 0) break;
          initStack[stack.pop().charCodeAt(0)] = false;
      }
      initStack[i.charCodeAt(0)] = true;
      stack.push(i);
  }
  return stack.join('');
};
// @lc code=end

