/*
 * @lc app=leetcode.cn id=380 lang=javascript
 *
 * [380] O(1) 时间插入、删除和获取随机元素
 */

// @lc code=start

var RandomizedSet = function() {
  this.nums = [];
  this.numsAndIndex = new Map();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if( this.numsAndIndex.has(val)){
    return false;
  }
  this.numsAndIndex.set(val, this.nums.length);
  this.nums.push(val);
  return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if(!this.numsAndIndex.has(val)){
    return false;
  }
  const index = this.numsAndIndex.get(val);
  const length = this.nums.length;
  this.numsAndIndex.set(this.nums[length - 1], index);
  // 直接将index的值换成最后一个元素，然后删除最后一个元素，即删掉了自己
  this.nums[index] = this.nums[length - 1];
  this.nums.pop();
  this.numsAndIndex.delete(val);
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  const randomIndex = Math.floor(Math.random() * this.nums.length);
  return this.nums[randomIndex]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

// @lc code=end