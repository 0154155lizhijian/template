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
  // 这里就不用hashMap了,用二分法求解
  const numsIdnex = new Array(nums.length).fill(0);
  for(i = 0; i< nums.length; i++){
      numsIdnex[i] = i;
  }
  numsIdnex.sort((x, y) => nums[x] - nums[y] );
  for(let j=0; j < nums.length; j++){
      const rightTarget = target - nums[numsIdnex[j]];
      let left = j+1, right = nums.length;
      while(left < right){
          let mid = ((left + right) /2) >> 0;
          if(nums[numsIdnex[mid]] === rightTarget){
              return [numsIdnex[j],numsIdnex[mid]];
          }else if(nums[numsIdnex[mid]] > rightTarget){
              right = mid;
          }else{
              left = mid +1;
          }
      }
  }
};
// @lc code=end


twoSum([3,2,4], 6);