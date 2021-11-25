/*
 * @lc app=leetcode.cn id=1011 lang=javascript
 *
 * [1011] 在 D 天内送达包裹的能力
 */

// @lc code=start
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
  function needDays(power){
    let days = 0;
    for (let i = 0; i < weights.length; ) {
        let cap = power;
        while (i < weights.length) {
            if (cap < weights[i]) break;
            else cap -= weights[i];
            i++;
        }
        days++;
    }
    return days;
  }
  let left = 0; let right = 1;
  weights.forEach(item => {
    right += item;
    left = Math.max(left, item);
  })
  while(left < right){
    let mid = ((left + right) / 2) >> 0;
    console.log(mid, left, right);
    if(needDays(mid) <= days){
      right = mid;
    }else{
      left = mid+1;
    }
  }
  return left;
};

// @lc code=end

shipWithinDays([1,2,3,4,5,6,7,8,9,10],1);

