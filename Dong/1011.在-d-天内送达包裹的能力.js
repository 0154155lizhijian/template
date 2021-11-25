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
    let needDays = 1; let resetPower = power;
    for(let i=0; i<weights.length;){
      while(i<weights.length){
        if (resetPower <= weights[i]){
          resetPower = power;
          break;
        }
        resetPower  -=  weights[i];
        i++;
      }
      needDays++;
    }
    return needDays;
  }
  let left = 0; let right = 1;
  weights.forEach(item => {
    right++;
    left = Math.max(left, item);
  })
  while(left < right){
    let mid = ((left + right) / 2) >> 0;
    if(needDays(mid) < days){
      right = mid;
    }else if(needDays(mid) === days){
      right = mid;
    }else if(needDays(mid) > days){
      left = mid-1;
    }
  }
  console.log('left', left);
  return left;
};
// @lc code=end

shipWithinDays([1,2,3,4,5,6,7,8,9,10],5);

