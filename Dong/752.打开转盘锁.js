/*
 * @lc app=leetcode.cn id=752 lang=javascript
 *
 * [752] 打开转盘锁
 */

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
// var openLock = function(deadends, target) {
//   const visited = new Map();
//   const queue = ['0000'];
//   let step = 0;
//   while(queue.length){
//     const n = queue.length;
//     for(let i=0; i<n; i++){
//       const cur = queue.shift();
//       // 黑名单
//       if(deadends.includes(cur)){
//         continue;
//       }
//       // 找到
//       if(cur == target){
//         return step;
//       }
//       // 转动密码
//       for(let j = 0; j<4; j++){
//         const upValue = tureUp(cur, j);
//         if(!visited.get(upValue)){
//           visited.set(upValue, 1);
//           queue.push(upValue);
//         }
//         const downValue = tureDown(cur, j);
//         if(!visited.get(downValue)){
//           visited.set(downValue, 1);
//           queue.push(downValue);
//         }
//       }
//     };
//     // 步数+1
//     step++;
//   }
//   return -1;
// };

function tureUp(cur, index){
  const curList = [...cur];
  if(curList[index] == 9){
    curList[index] = 0;
  }else{
    curList[index]++;
  }
  return curList.join('');
}

function tureDown(cur, index){
  const curList = [...cur];
  if(curList[index] == 0){
    curList[index] = 9;
  }else{
    curList[index]--;
  }
  return curList.join('');
}

// 拓展，双向BFS
var openLock = function(deadends, target) {
  // todo
}

openLock(["0201","0101","0102","1212","2002"], "0202");
// @lc code=end

