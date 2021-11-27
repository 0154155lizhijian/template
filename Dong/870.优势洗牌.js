/*
 * @lc app=leetcode.cn id=870 lang=javascript
 *
 * [870] 优势洗牌
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var advantageCount = function(nums1, nums2) {
  // 排序双方速度
  nums1.sort((a, b) => a-b);
  const len = nums2.length;
  const IndexNums2 = new Array(len).fill(0).map((_, i) => i);
  IndexNums2.sort((a, b) => {
    if(nums2[a] > nums2[b] ){
      return 1;
    }else{
      return -1;
    }
  });
  let i=0, j=0; // nums1，nums2的初始位置
  let n=len-1; // 对应nums最大的值
  let res = new Array(len).fill(0);
  while(i < len){
    if(nums1[i] > nums2[IndexNums2[j]]){ // 对应场次，跑得过
      res[IndexNums2[j]] = nums1[i]; // 对应nums2的排兵布阵，放对应的马
      j++; // nums2换下一批，继续找策略
    }else{
      res[IndexNums2[n]] = nums1[i];  // 跑不过，去找nums最快的马
      n--; // nums第二快的马...第三第四..
    }
    i++;
  }
  return res;
};
// @lc code=end



