/*
 * @lc app=leetcode.cn id=316 lang=javascript
 *
 * [316] 去除重复字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  const stack = new Array(); // 输出的结果
  const count = new Array(256).fill(0); // 各个字符ASCII和其对应的数量
  for (const a of s) {
    count[a.charCodeAt(0)]++;
  }

  const initStack = new Array(256).fill(0);
  for (const a of s) {
    count[a.charCodeAt(0)]--;
    if (initStack[a.charCodeAt(0)]) { // 有了就不堆栈了
      continue;
    }
    while (
      stack.length &&
      stack[stack.length - 1].charCodeAt(0) > a.charCodeAt(0) // 要是栈顶大于a
    ) {
      if(count[stack[stack.length - 1].charCodeAt(0)] === 0){ // 要是栈顶元素stack[stack.length - 1]后面没了，那就算了
        break;
      }
      initStack[stack.pop().charCodeAt(0)] = false; // 要不然就出栈，等后面再说，在initStack也清除状态，等下一次进入
    }
    initStack[a.charCodeAt(0)] = true;
    stack.push(a);
  }
  return stack.join("");
};

// @lc code=end
