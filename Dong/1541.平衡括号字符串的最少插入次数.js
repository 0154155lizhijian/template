/*
 * @lc app=leetcode.cn id=1541 lang=javascript
 *
 * [1541] 平衡括号字符串的最少插入次数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function (s) {
  // let  res = 0; // 增加的括号
  // let  need = 0; // 需要的右括号
  //   for (let i = 0; i < s.length; i++) {
  //       if (s[i] == '(') {
  //           need += 2;
  //           if (need % 2 == 1) {
  //               res++; // 加一个右边括号
  //               need--;
  //           }
  //       }

  //       if (s[i] == ')') {
  //           need--;
  //           if (need == -1) {
  //               res++; // 加一个左边括号
  //               need = 1;
  //           }
  //       }
  //   }

  //   return res + need;

  // 栈的实现
  const stack = [];
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push("(");
      continue;
    }
    if (i + 1 == s.length) { // 说明是右括号，而且是最后一个元素，前面也没有单数的右括号
      if (stack.length == 0) res += 2;
      else {
        res++;
        stack.pop();
      }
    } else {
      if (s[i + 1] == ")") { // 这里会判断同)
        if (stack.length == 0) res++;
        else stack.pop();
        i++;
      } else {
        if (stack.length == 0) res += 2;
        else {
          res++;
          stack.pop();
        }
      }
    }
  }
  res += stack.length * 2
  return res
};
// @lc code=end