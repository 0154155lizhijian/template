/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  // 这里就不用hashMap,用二分法求解
  nums.sort((x, y) => x-y );
  for(let j=0; j < nums.length; j++){
      const rightTarget = target - nums[j];
      let left = j+1, right = nums.length;
      while(left < right){
          let mid = ((left + right) /2) >> 0;
          if(nums[mid] === rightTarget){
              console.log(j, mid);
              return [j, mid];
          }else if(nums[mid] > rightTarget){
              right = mid;
          }else{
              left = mid +1;
          }
      }
  }
};
// @lc code=end


twoSum([3,2,4], 6);