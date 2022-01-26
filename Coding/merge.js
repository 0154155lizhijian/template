// var arr=[[1,2,4],[2,3,7],[3,5,7],[4,5,8]] 合并成一维数组
function sort(arr){
  const result = [];
  arr.forEach(subList => {
    result.push(mergeList(subList));
  });
  return mergerSortList(result);
}

const mergerSortList = (result) => {
  if (result.length < 2) {
    return result[0];
  }
  let i = 0;
  const temp = [];
  while (i < result.length / 2) {
    temp.push(merge(result[2 * i], result[2 * i + 1]));
    i++;
  }
  return mergerSortList(temp);
};



const mergeList = (arr) => {
  const length = arr.length;
  if(length < 2){
    return arr;
  }
  const mid = length >> 1;
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return merge(mergeList(leftArr), mergeList(rightArr));
}

const merge = (leftArr, rightArr) => {
  let result = [];
  while (leftArr.length && rightArr.length) {
    if(leftArr[0] > rightArr[0]){
      result.push(rightArr.shift());
    }else{
      result.push(leftArr.shift());
    }
  }
  while (leftArr.length) {
    result.push(leftArr.shift());
  }
  while (rightArr.length) {
    result.push(rightArr.shift());
  }
  return result;
}



const testArr=[[1,2,4,5,2,4],[2,3,7,1,4,5,6,7,7,8],[3,5,7,34],[4,5,8,12,15,16,66]]
console.log(sort(testArr));
