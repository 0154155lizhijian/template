/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let res = [];
  const length = nums.length;
  const traverse = (nums, track) => {
    if(track.length === length){
      res.push([...track]);
      return;
    }
  
    for (let i = 0; i < nums.length; i++) {
      if(track.includes(nums[i])){
        continue;
      }
      track.push(nums[i]);
      traverse(nums, track);
      track.pop();
    }
  }
  traverse(nums, []);
  return res;
};

permute([0,1])
// @lc code=end

