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
var sortArray = function (nums) {
  // 利用api
  // return nums.sort((a,b) => a-b);
  // 选择排序  最简单也最鸡肋 且时间不稳定
  // 原理： 先找到数组中最小的数，和第一个数换位置 || 找到最大最小，交换
  for (let l = 0, r = nums.length - 1; l < r; l++, r--) {
    let min = l;
    let max = r;

    for (let j = l; j <= r; j++) {
      if (nums[j] < nums[min]) {
        min = j;
      }
      if (nums[j] > nums[max]) {
        max = j;
      }
    }
    swap(nums, min, l);
    if(l == max){
      max = min;
    }
    swap(nums, max, r);
  }
  return nums;
};

const swap = (list, l, j) => {
  const temp = list[l];
  list[l] = list[j];
  list[j] = temp;
};
// @lc code=end

console.log(sortArray([5,2,3,1]));
