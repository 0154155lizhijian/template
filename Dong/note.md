## 前缀和
#### 求区域和的时候，可以考虑**前缀和**技巧
-  303. 区域和检索 - 数组不可变    
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
## 差分数组 
#### `频繁对原始数组的某个区间的元素进行增减`
- 差分数组技巧-差分数组的主要适用场景是频繁对原始数组的某个区间的元素进行增减
```
/**
 * 差分数组 工具方法
 * @param {*} nums 
 */

/* 输入一个初始数组，区间操作将在这个数组上进行 */
function Difference(nums = []) {
  let diff = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    diff[i] = nums[i] - nums[i - 1];
  }
}

/* 返回结果数组 */
function result() {
  // 根据差分数组构造结果数组
  let res = [diff[0]];
  for (let i = 1; i < diff.length; i++) {
    res[i] = res[i - 1] + diff[i];
  }
  return res;
}

/* 给闭区间 [i,j] 增加 val（可以是负数）*/
function increment(i, j, val) {
  diff[i] += val;
  if (j + 1 < diff.length) {
    diff[j + 1] -= val;
  }
}
```

## 链表

#### 快慢指针（一般适用是否闭环，求中点，环开始点,原地修改XXX）
```
boolean hasCycle(ListNode head) {
    ListNode fast, slow;
    fast = slow = head;
    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
        
        if (fast == slow) return true;
    }
    return false;
}
```

#### 滑动窗口
```
/* 滑动窗口算法框架 */
function slidingWindow(s, t) {
  const need = new Map();
  const window = new Map();
  // 初始化窗口
  for(i of t){
      if(need.get(i)){
          need.set(i, need.get(i)+1)
      }else{
          need.set(i ,1);
          window.set(i, 0);
      }       
  }
  let left = 0, right = 0;
  console.log(left, right) // debugger
  while (right < s.length) {
      let c = s[right];
      right++;
      ...//窗口操作
      while(窗口缩小条件){
          let d = s[left];
          left++;
          ...//窗口操作
      }
  }
}
```

#### 二分查找
- 框架，总结
```
function binarySearch(nums, target) {
    let left = 0, right = nums.length;

    while(left <= right>) {
        let mid = ((left + right)/2) >> 0;
        if (nums[mid] == target) {
            ... // 求左边界的时候，right = mid - 1; 求右边界的时候 left = mid + 1; （左加右减）
        } else if (nums[mid] < target) {
            left = mid+1;
        } else if (nums[mid] > target) {
            right = mid-1
        }
    }
    if(nums[left] !== target || left>= nums.length){
        return -1;
    }
    return ...; // 左边界就return left，右边界right
}
```

- 应用
```
// 函数 f 是关于自变量 x 的单调函数
int f(int x) {
    // ...
}

// 主函数，在 f(x) == target 的约束下求 x 的最值
int solution(int[] nums, int target) {
    if (nums.length == 0) return -1;
    // 问自己：自变量 x 的最小值是多少？
    int left = ...;
    // 问自己：自变量 x 的最大值是多少？
    int right = ... + 1;
    
    while (left < right) {
        int mid = left + (right - left) / 2;
        if (f(mid) == target) {
            // 问自己：题目是求左边界还是右边界？
            // ...
        } else if (f(mid) < target) {
            // 问自己：怎么让 f(x) 大一点？
            // ...
        } else if (f(mid) > target) {
            // 问自己：怎么让 f(x) 小一点？
            // ...
        }
    }
    return left;
}


// 很多类似的问题都可以用这种方式去计算最值
int split(int[] nums, int max) {
    // 至少可以分割的子数组数量
    int count = 1;
    // 记录每个子数组的元素和
    int sum = 0;
    for (int i = 0; i < nums.length; i++) {
        if (sum + nums[i] > max) {
            // 如果当前子数组和大于 max 限制
            // 则这个子数组不能再添加元素了
            count++;
            sum = nums[i];
        } else {
            // 当前子数组和还没达到 max 限制
            // 还可以添加元素
            sum += nums[i];
        }
    }
    return count;
}
```

### 二叉树基本公式
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

### 遍历多叉树
```
/* 多叉树遍历框架 */
function traverse(root) {
    if (root == null) return;
    for (child of root.children){
        traverse(child);
    }
}
```

### 二叉搜索树
```
function BST(TreeNode root, int target) {
    if (root.val == target)
        // 找到目标，做点什么
    if (root.val < target) 
        BST(root.right, target);
    if (root.val > target)
        BST(root.left, target);
}
```


### 回溯框架
```
result = []

def backtrack(路径, 选择列表):
    if 满⾜结束条件:
        result.add(路径)
        return

    for 选择 in 选择列表: 
        # 做选择
        将该选择从选择列表移除 
        路径.add(选择)
        backtrack(路径, 选择列表) 
        # 撤销选择
        路径.remove(选择) 
        将该选择再加⼊选择列表
```


### 二维矩阵遍历框架

```
function dfs(grid, i, j, visited) {
    const m = grid.length, n = grid[0].length;
    if (i < 0 || j < 0 || i >= m || j >= n) {
        // 超出索引边界
        return;
    }
    if (visited[i][j]) {
        // 已遍历过 (i, j)
        return;
    }
    // 进入节点 (i, j)
    visited[i][j] = true;
    dfs(grid, i - 1, j); // 上
    dfs(grid, i + 1, j); // 下
    dfs(grid, i, j - 1); // 左
    dfs(grid, i, j + 1); // 右
}
```