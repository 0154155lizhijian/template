/*
 * @lc app=leetcode.cn id=410 lang=javascript
 *
 * [410] 分割数组的最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
  function getMinSubArr(max){
    let len = 1, sum=0;
    for(let i=0; i< nums.length; i++){
      if(sum+nums[i] > max){
        len++;
        sum = nums[i]
      }else{
        sum += nums[i];
      }
    }
    return len;
  }
  let left = Math.max(...nums);
  let right = nums.reduce((pre,cur) => pre+cur)+1;
  while(left < right){
    const mid = ((left+right)/2) >> 0;
    if(getMinSubArr(mid) <= m){
      right = mid;
    }else{
      left = mid+1
    }
  }
  return left;
};
// @lc code=end
splitArray([7,2,5,10,8], 2)

