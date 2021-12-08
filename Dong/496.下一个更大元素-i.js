/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  const topStack = []; // 这个栈存储一个单调递增的数组，例如[1，2，4]
  const resMap = new Map(); // 母数组所有值对应的nextGreaterElement
  for(i=nums2.length-1; i>=0; i--){
    // 栈里面有值了，则进行比较，若这个值大于栈值，则出栈（别担心全部出栈了，这种情况，他会入栈，成为新的top）
    while(topStack.length && nums2[i] >= topStack[topStack.length-1]){
      topStack.pop();
    }
    // 记录结果
    // greaterElement = !topStack.length ? -1 : topStack[topStack.length-1];
    // resMap.set(nums2[i], greaterElement) 
    resMap.set(nums2[i], topStack[topStack.length-1] || -1)
    // 比他小的都出栈了,或者压在栈底，所以先把他压入栈
    topStack.push(nums2[i]);
  }
  return nums1.map(item => resMap.get(item));
};
// @lc code=end

