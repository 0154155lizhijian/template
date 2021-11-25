/*
 * @lc app=leetcode.cn id=875 lang=javascript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
  let left = 1, right = Math.pow(10, 9)+1;
  while(left < right){
    let mid = ((left + right)/2) >> 0;
    if(gethour(mid) === h){
      right = mid;
    }else if(gethour(mid) > h){
      left = mid+1;
    }else if(gethour(mid) < h){
      right = mid;
    }
  };
  return right;

  function gethour(speed){
    let hour = 0;
    for (let i = 0; i < piles.length; i++) {
      hour += (piles[i] / speed ) >> 0;
      if(piles[i] % speed){
        hour ++;
      }
    }
    return hour;
  }
};
// @lc code=end

minEatingSpeed([30,11,23,4,20], 5);

