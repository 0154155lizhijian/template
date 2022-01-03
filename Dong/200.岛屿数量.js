/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let res = 0, m = grid.length, n = grid[0].length;
  for(let i=0; i<m ; i++){
    for(let j=0; j<n; j++){
      if(grid[i][j] == '1' ){
        res++;
        // 递归淹没岛屿
        dfs(grid, i , j);
      }
    }
  }
  return res;
};

const dfs = (grid, i, j) => {
  let m = grid.length, n = grid[0].length;
  if(i<0 || j<0 || i>= m || j>=n){
    return;
  }
  if(grid[i][j] == '0'){
    return;
  }
  grid[i][j] = '0';
  dfs(i+1, j);
  dfs(i-1, j);
  dfs(i, j+1);
  dfs(i, j-1);
}
// @lc code=end

