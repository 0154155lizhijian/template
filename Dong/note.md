```
/**
 * 树遍历核心
 * @param {Node} TreeNode 
 * @param {*} root 
 */

function traverse(TreeNode, root) {
  // 前序遍历代码位置
   traverse(root.left);
  // 中序遍历代码位置
   traverse(root.right);
  // 后序遍历代码位置 
}
```

- 求区域和的时候，可以考虑**前缀和**技巧
  303. 区域和检索 - 数组不可变    
```
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    const n = nums.length;
    this.PreNum =[0];
    for (let i = 0; i < n; i++) {
        this.PreNum[i + 1] = this.PreNum[i] + nums[i];
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    const sum = this.PreNum[right+1] - this.PreNum[left];
    return sum;
};
```

- 二维前缀和
```
preSum[i][j] = preSum[i-1][j] + preSum[i][j-1] + matrix[i - 1][j - 1] - preSum[i-1][j-1];
```
```
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    const x = matrix.length; const y = matrix[0].length;
    if(x===0 || y===0){
        return 0;
    }
    this.preSum = new Array(x+1).fill(0).map(() => new Array(y + 1).fill(0));
    for(i=1;i<=x;i++){
        for(j=1; j<=y; j++){
           this.preSum[i][j] = this.preSum[i-1][j] + this.preSum[i][j-1] + matrix[i - 1][j - 1] - this.preSum[i-1][j-1];
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    return this.preSum[row2+1][col2+1] - this.preSum[row1][col2+1] - this.preSum[row2+1][col1] + this.preSum[row1][col1];
};
```


- 和为 K 的子数组 
```
preNum[p-1] = preNum[j] - k
```
```
var subarraySum = function(nums, k) {
    const mp = new Map();
    mp.set(0, 1);
    let count = 0, pre = 0;
    for (const x of nums) {
        pre += x;
        if (mp.has(pre - k)) {
            count += mp.get(pre - k);
        }
        if (mp.has(pre)) {
            mp.set(pre, mp.get(pre) + 1);
        } else {
            mp.set(pre, 1);
        }
    }
    return count;
};
```
