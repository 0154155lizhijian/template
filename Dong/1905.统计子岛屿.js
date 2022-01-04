/*
 * @lc app=leetcode.cn id=1905 lang=javascript
 *
 * [1905] 统计子岛屿
 */

// @lc code=start
/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 * 0 水 1 陆地
 */
var countSubIslands = function (grid1, grid2) {
  let res = 0;
  const m = grid2.length;
  n = grid2[0].length;

  // 淹没
  const dfs = (i, j) => {
    if (i < 0 || j < 0 || i >= m || j >= n) {
      return;
    }
    if (grid2[i][j] == 0) {
      return;
    }
    grid2[i][j] = 0;
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 如果父是水 子是陆地 则把这样的陆地淹没
      if (grid1[i][j] == 0 && grid2[i][j] == 1) {
        dfs(i, j);
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 剩下的都是子岛屿了，计算数量
      if (grid2[i][j] == 1) {
        res++;
        dfs(i, j);
      }
    }
  }
  return res;
};
// @lc code=end
