/*
 * @lc app=leetcode.cn id=698 lang=javascript
 *
 * [698] 划分为k个相等的子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
  if(k >nums.length) return false;
  let sum=0;
  nums.forEach(item => sum += item);
  if(sum % k) return false;
  const target = sum / k;
  // const bucket = new Array(k).fill(0);
  const used = new Array(nums.length).fill(false);
  nums.sort((a, b) => b-a);
  // 数组维度
  // return dfsList(nums, 0, bucket, target);
  // 桶维度
  return dfsBucket(k, 0, nums, 0, used, target);
};

const dfsList = (nums, index, bucket, target) => {
  if(index === nums.length){
    return bucket.every((item => item === target ))
  }
  for(let i=0; i<bucket.length; i++){
    if(bucket[i] + nums[index] > target){
      continue;
    }
    bucket[i] += nums[index];
    if(dfsList(nums, index+1, bucket, target)){
      return true;
    }
    bucket[i] -= nums[index];
  }
  return false;
}

const dfsBucket = (k, bucketSum, nums, start, used, target) => {
  if(k===0) return true;
  // 第K个桶子已经满了，换下一个
  if(bucketSum === target){
    return dfsBucket(k-1, 0, nums, 0, used, target);
  }
  for(let i= start; i< nums.length; i++){
    if(used[i]){
      continue;
    }
    if(nums[i] + bucketSum > target){
      continue;
    }
    // 做选择
    used[i] = true;
    bucketSum += nums[i];
    if (dfsBucket(k, bucketSum, nums, i + 1, used, target)) {
      return true;
    }
    // 撤销选择
    used[i] = false;
    bucketSum -= nums[i];
  }
  return false;
}

canPartitionKSubsets([4,3,2,3,5,2,1], 4 );
// @lc code=end




