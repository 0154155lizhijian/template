/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  let res=[];
  const board = new Array(n).fill('.').map(() => new Array(n).fill('.'));
  // 路径：board中小于row的那些行都已经成功放置了皇后
  // 选择列表：第row行的所有列都是放置皇后的选择
  // 结束条件：row超过board的最后一行，说明棋盘放满了
  const traverse = (board, row) => {
    if(row === board.length){
      const [...stringsBoard] = board; // 拷贝一份board
      for (let i = 0; i < n; i++) {
        stringsBoard[i] = stringsBoard[i].join(""); // 将每一行拼成字符串
      }
      res.push(stringsBoard);
      return;
    }

    for (let col = 0; col < n; col++) {
      if(!isValid(board, row, col)){
        continue;
      }
      // 做选择
      board[row][col] = 'Q';
      // 下一行决策
      traverse(board, row+1);
      // 撤销选择
      board[row][col] = '.';
      
    }
  }

  traverse(board, 0);
  return res;
};

function isValid(board, row, col){
  const n = board.length;
  // 检查上方
  for(let i=0; i<n; i++){
    if(board[i][col] === 'Q') {
      return false;
    }
  }
  // 检查左上
  for(let i=row-1, j=col-1; i>=0 && j>=0; i--, j--){
    if(board[i][j] === 'Q') {
      return false;
    }
  }
  // 检查右上
  for(let i=row-1, j=col+1; j<=n && i>=0; i--, j++){
    if(board[i][j] === 'Q') {
      return false;
    }
  }
  return true;
}

// @lc code=end

