/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
let memo = [];
var coinChange = function(coins, amount) {
// 自顶向下
//   memo = new Array(amount+1).fill(0);
//   return dp(coins, amount);
// };

// function dp(coins, amount){
//   if(amount == 0) return 0;
//   if(amount < 0) return -1;

//   // 查备忘录，防止重复计算
//   if (memo[amount] != 0)
//   return memo[amount];

//   let res = Number.MAX_VALUE;
//   for(let coin of coins){
//     const subProblem = dp(coins, amount-coin);
//     if(subProblem == -1) continue;
//     res = Math.min(res, subProblem+1);
//   }
//   memo[amount] = res === Number.MAX_VALUE ? -1 : res
//   return  memo[amount];
//  自顶向上
  // const dp = new Array(amount+1).fill(amount+1);

  // dp[0] = 0;
  // // 外层 for 循环在遍历所有状态的所有取值
  // for(let i=1; i< dp.length; i++){
  //   // 内层 for 循环在求所有选择的最小值
  //   for (let coin of coins) {
  //     if(i-coin < 0) continue;
  //     dp[i] = Math.min(dp[i], 1+dp[i-coin]);
  //   }
  // }

  // return dp[amount] == amount+1 ? -1 : dp[amount];
}


// @lc code=end

