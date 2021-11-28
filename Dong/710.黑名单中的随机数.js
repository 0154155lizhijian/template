/*
 * @lc app=leetcode.cn id=710 lang=javascript
 *
 * [710] 黑名单中的随机数
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} blacklist
 */
 var Solution = function(n, blacklist) {
  this.len = n - blacklist.length;
  this.mapping = new Map();
  let last = n - 1;
  for (let b of blacklist) {
      // 给黑名单中的值占位，存储
      this.mapping.set(b, 0);
  }
  for (b of blacklist){
      if (b < this.len){ // 大于的默认不换位置，就放那边就行
          // 找出不在黑名单中的最后一个元素
          while (this.mapping.has(last)){
              last--;
          }
          // 把黑名单放到最后一个元素
          this.mapping.set(b, last);
          last--;
      };
  }
};

/**
* @return {number}
*/
Solution.prototype.pick = function() {
  var randomIndex = Math.floor(Math.random()*this.len);
  if (this.mapping.has(randomIndex)){
      return this.mapping.get(randomIndex);
  }
  return randomIndex;
};

/**
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(n, blacklist)
* var param_1 = obj.pick()
*/

// @lc code=end

