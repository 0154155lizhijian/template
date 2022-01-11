/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
  //   // 递归
  //   if(n == 1  || n==0){
  //     return n;
  //   }
  //   return fib(n-1) + fib(n-2);
      // // 解决重叠子问题的递归
      // const memo = new Array(n+1).fill(0);
      // return build(memo, n)
      // 动态规划解决
      // const dp =  new Array(n).fill(0);
      // dp[0] = 0; dp[1] = 1;
      // for(let i= 2; i<=n; i++){
      //     dp[i] = dp[i-1] + dp[i-2];
      // }
      // return dp[n];
      // 状态压缩，只存需要存储的状态
      if(n == 0) return 0;
      if( n ==1 || n ==2){
          return 1;
      }
      let preSum = 1; cur = 1;
      for(let i = 3; i<= n; i++){
          let sum = preSum + cur;
          preSum = cur;
          cur = sum;
      }
      return cur;
  };
  
  // const build = (memo, n) => {
  //     if(n==0 || n==1){
  //         return n;
  //     }
  //     if(!memo[n]){
  //         memo[n] =build(memo, n-1) + build(memo, n-2);
  //     }
  //     return memo[n]
  // }
// @lc code=end

