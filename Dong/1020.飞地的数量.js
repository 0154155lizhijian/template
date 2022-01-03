/*
 * @lc app=leetcode.cn id=1020 lang=javascript
 *
 * [1020] 飞地的数量
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
  let res = 0;
  const m = grid.length; n = grid[0].length;

  const dfs = (i, j) => {
    if(i<0 || j<0 || i>= m || j>=n){
      return;
    }
    if(grid[i][j] == 0){
      return;
    }
    grid[i][j] = 0;
    dfs(i+1, j);
    dfs(i-1, j);
    dfs(i, j+1);
    dfs(i, j-1);
  }

  // 淹没靠边陆地
  for(let i = 0; i<m; i++){
    dfs(i, 0);
    dfs(i, n-1);
  }
  for(let j = 0; j<n; j++){
    dfs(0, j);
    dfs(m-1, j);
  }

  // 剩下的陆地都是无法走出的单元格
  for(let i=0; i<m ; i++){
    for(let j=0; j<n; j++){
      if(grid[i][j] == 1){
        res++;
      }
    }
  }

  return res;
};
// @lc code=end

