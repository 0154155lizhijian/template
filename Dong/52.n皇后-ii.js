/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  let res = 0;
  // 初始化面板
  const board = new Array(n).fill('.').map(()=> new Array(n).fill('.'));

  const isValid = (board, row, col) => {
    // 上
    for(let i=0; i< row; i++){
      if(board[i][col] === 'Q'){
        return false;
      }
    }
    // 左上
    for(let i=row-1, j=col-1; i>=0 && j>=0; i--, j--){
      if(board[i][j] === 'Q'){
        return false;
      }
    }

    // 右上
    for(let i=row-1, j=col+1; i>=0 && j<=n ; i--, j++){
      if(board[i][j] === 'Q'){
        return false;
      }
    }

    return true;
  }

  // 路径，board中小于low的是已经放置的
  // 选择列表： 第row行放置的选择
  // 结束：row 到了边界
  const dfs = (board, row) => {
    if(row === n){
      res++;
      return;
    }

    for(let col=0; col<n; col++){
      if(!isValid(board, row, col)){
        continue;
      }
      board[row][col] = 'Q';
      dfs(board, row+1);
      board[row][col] = '.';
    }
  }

  dfs(board, 0);
  return res;
};

console.log(totalNQueens(2));
// @lc code=end

