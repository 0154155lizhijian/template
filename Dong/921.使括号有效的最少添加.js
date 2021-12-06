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
  // const match = new Map([[')', '(']]);
  // const stack = [];
  // for( c of s){
  //     if( stack.length && match.get(c) === stack[stack.length-1] ){
  //         stack.pop();
  //     }else{
  //         stack.push(c);
  //     }
  // }
  // return stack.length;
  // 优化
  let need = 0; // 变量记录右括号的需求量
  let res = 0; // 多余的右括号
  for( c of s){
      if(c === '('){
          need++;
      }
      if(c === ')'){
          need--;
          if(need === -1){
              need = 0;
              res++;
          }
      }
  }
  return res + need;
};
// @lc code=end

