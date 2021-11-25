/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
  // 定义左右指针，计划先做一次二分查找，找出左边界
  let left = 0, right = nums.length-1, start=0;
  while(left <= right){
      let mid = ((left + right)/2) >> 0;
      if(nums[mid] >= target){
          right = mid - 1;
      }else{
          left = mid+1;
      }
  }
  // 判断得到的left是否有效
  if(left >= nums.length || nums[left] != target){
      return [-1, -1];
  }else{
      // 记录左边的位置
      start = left;
      // 再做一次二分查找，找出右边界
      let right = nums.length -1;
      while(left <= right){
          let mid = ((left + right)/2) >> 0;
          if(nums[mid] > target){
              right = mid - 1;
          }else{
              left = mid+1;
          }
      }
      return [start, right];
  }

};
// @lc code=end

