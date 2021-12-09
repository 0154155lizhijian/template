/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
  // 单调队列
  const len = nums.length;
  const res = [];
  const window = new MonotonicQueue();
  for(let i=0; i<len; i++){
      if(i< k-1){
          window.push(nums[i])
      }else{
          window.push(nums[i]);
          res.push(window.max());
          window.pop(nums[i - k + 1]); 
      }
  }
  return res;
};


class MonotonicQueue{
  constructor(){
      this.push = push;
      this.max = max;
      this.pop = pop;
      const queen = []; // 元素单调递减
      function push(n){
          // 将小于 n 的元素全部删除
          while (queen.length && queen[queen.length-1] < n) {
              queen.pop();
          }
          // 然后将 n 加入尾部
          queen.push(n);
      }
      function max(){
          return queen[0]
      }
      function pop(n){
          if(n === queen[0]){
              queen.shift();
          }
      }
  }
}
// @lc code=end

