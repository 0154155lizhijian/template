/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
  // // 回溯
  // const res = [];
  // const backtrack = (start, track) => {
  //     res.push([...track]);
  //     for(let i=start; i< nums.length; i++){
  //         // 做选择
  //         track.push(nums[i]);
  //         // 下一层决策
  //         backtrack(i+1,track);
  //         // 撤销选择
  //         track.pop();
  //     }
  // }

  // backtrack(0, []);
  // 迭代
  const res = [[]];
  for (let i = 0; i < nums.length; i++) {
      const t = [];
      for (let j = 0; j < res.length; j++) {
          t.push([...res[j], nums[i]]);
      }

      res.push(...t);
  }

  return res;
}
// @lc code=end

