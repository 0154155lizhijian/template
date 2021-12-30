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
let res = [];
let length = 0;

var permute = function(nums) {
  length = nums.length;
  traverse(nums, []);
  console.log(res);
  return res;
};

function traverse(nums, track){
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

permute([0,1])
// @lc code=end

