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
  // 原理： 先找到数组中最小的数，和第一个数换位置 || 优化： 找到最大最小，交换
  //   for (let l = 0, r = nums.length - 1; l < r; l++, r--) {
  //     let min = l;
  //     let max = r;
  //     for (let j = l; j <= r; j++) {
  //       if (nums[j] < nums[min]) {
  //         min = j;
  //       }
  //       if (nums[j] > nums[max]) {
  //         max = j;
  //       }
  //     }
  //     swap(nums, min, l);
  //     if(l == max){
  //       max = min;
  //     }
  //     swap(nums, max, r);
  //   }
  // 冒泡排序
  // 优化，若不进行交换了，则直接输出
  //  for(let i = nums.length-1; i>0; i--){
  //   let swapFlag = false;
  //   for(let j=0; j<i; j++){
  //     if(nums[j] > nums[j+1]){
  //       swap(nums, j, j+1);
  //       swapFlag = true;
  //     }
  //   }
  //   if(!swapFlag){
  //     return nums;
  //   }
  //  };
  // 双向冒泡
  //   let left = 0,
  //     right = nums.length - 1,
  //     swapFlag = true;
  //   while (left < right && swapFlag) {
  //     swapFlag = false;
  //     // 第一趟先把元素值最大的放在序列的最后面
  //     for (let i = left; i < right; i++) {
  //       if (nums[i] > nums[i + 1]) {
  //         // 前一个元素的值大于后一个元素的值
  //         swap(nums, i, i + 1);
  //         swapFlag = true; // 发生了元素交换，flag置为true
  //       }
  //     }
  //     right--; // 更新上界
  //     // 第二趟把元素值最小的放在序列的最前面
  //     for (let i = right; i > left; i--) {
  //       if (nums[i] < nums[i - 1]) {
  //         // 后一个元素的值小于前一个元素的值
  //         swap(nums, i, i - 1);
  //         swapFlag = true; // 发生了元素交换，flag置为true
  //       }
  //     }
  //     left++; // 更新下界
  //   }
  // 插入排序
  for(let i=1; i<nums.length; i++){
    for(let j=i; j>0 && nums[j] < nums[j-1]; j--){
      swap(nums, j, j-1);
    }
  }
  return nums;
};

const swap = (list, l, j) => {
  const temp = list[l];
  list[l] = list[j];
  list[j] = temp;
};
// @lc code=end

console.log(sortArray([5, 2, 3, 1, 4, 3, 2, 3, 4, 1, 2, 4, 23, 0, 88]));
console.log(sortArray([5, 2, 3, 1]));
