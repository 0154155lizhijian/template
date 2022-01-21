/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  // 利用api
  // return nums.sort((a,b) => a-b);
  // 选择排序  最简单也最鸡肋 且时间不稳定
  // 原理： 先找到数组中最小的数，和第一个数换位置
  // for(let i = 0; i< nums.length; i++){
  //   let min = i;
  //   for(let j = i+1; j<nums.length; j++){
  //     if(nums[j] < nums[min]){
  //       min = j;
  //     }
  //   }
  //   if(min !== i){
  //     swap(nums, min, i);
  //   }
  // }
  return nums;
};

const swap = (list, i, j) => {
  const temp = list[i];
  list[i] = list[j];
  list[j] = temp;
}
// @lc code=end

console.log(sortArray([2,3,4,1,5,7,9,6]));