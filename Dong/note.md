## 树基本公式
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

#### 快慢指针（一般适用是否闭环，求中点，环开始点）
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
    return ...; // 左边界就return left，右边界right
}
```
