/*
 * @lc app=leetcode.cn id=870 lang=javascript
 *
 * [870] 优势洗牌
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function(nums1, nums2) {
    const sortNum1 = nums1.sort((a, b) => a>b);
    const len = nums2.length;
    const initNums2 = new Array(len).fill(0).map((_, i) => i);
    const IndexNums2 = initNums2.sort((a, b) => {
      if(nums2[a] > nums2[b] ){
        return 1;
      }else{
        return -1;
      }
    });
    let i=0, j=0; // nums1，nums2的初始位置
    let n=len-1;
    let res = new Array(len).fill(0);
    while(i < len){
      if(sortNum1[i] > nums2[IndexNums2[j]]){
        res[IndexNums2[i]] = sortNum1[i];
        j++;
      }else{
        res[IndexNums2[n]] = sortNum1[i];
        n--;
      }
      i++;
    }
    return res;
};
// @lc code=end

advantageCount([12,24,8,32], [13,25,32,11])




